import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";
import instance from "../../../utils/axios";
// import isEmpty from "is-empty";
import AboutDropTemplate from "./aboutus/index_template";

const NavTemplate = ({ clicked, isDrop, isOpen }) => {
  const [menu, setMenu] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (e) => {
    alert("clicked")
    if (e === activeDropdown) {
      // close dropdown
      setShowDropdown(false);
      setActiveDropdown(null);
      clicked(false);
    } else {
      // open dropdown
      setShowDropdown(true);
      setActiveDropdown(e);
      clicked(true);
    }
  };
 

  const router = useRouter();A

  useEffect(() => {
    setShowDropdown(false);
    setActiveDropdown(null);
    clicked(false);
  }, [router.asPath]);

  useEffect(() => {
    instance
      .get("/menu-categories")
      .then((response) => {
        setMenu(response.data.categories);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setShowDropdown(false);
      setActiveDropdown(null);
      clicked(false);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={styles.navLinks}>
        {menu.map(
          (menuItem, idx) =>
            menuItem.status === "PUBLISHED" && (
              <li
                key={idx}
                className={
                  // isEmpty(menuItem.sub_categories) ? "" :
                  styles.hasDrop
                }
              >
                {/* {isEmpty(menuItem.sub_categories) ? (
                  <ActiveLink
                    name={menuItem.name}
                    href={`/${menuItem.slug}`}
                    linkClass={`${isDrop ? styles.darkText : ""}`}
                  />
                ) : (
                  <> */}
                <button
                  className={`${styles.hasDropBtn} ${styles.navText} ${
                    showDropdown && activeDropdown === menuItem.id
                      ? styles.boldText
                      : ""
                  } ${isDrop ? styles.darkText : ""}`}
                  onClick={() => handleDropdownClick(menuItem.id)}
                  
                >
                  <span>{menuItem.name}</span>
                  <i className="far fa-chevron-down"></i>
                </button>
                <div
                  className={`${styles.dropdownMenu} ${
                    showDropdown && activeDropdown === menuItem.id
                      ? styles.show
                      : ""
                  }`}
                >
                  <div className={styles.dropdownContainer}>
                    <div
                      className={`${styles.dropdownWrapper} ${styles.about}`}
                    >
                      <AboutDropTemplate content={menuItem.sub_categories} />
                    </div>
                  </div>
                </div>
                {/* </>
                )} */}
              </li>
            ),
        )}

        <li>
          <ActiveLink
            name="Portfolio"
            href="/portfolio"
            linkClass={`${isDrop ? styles.darkText : ""} ${styles.navText}`}
          />
        </li>

        <li>
          <ActiveLink
            name="Partners"
            href="/partners-affiliation"
            linkClass={`${isDrop ? styles.darkText : ""} ${styles.navText}`}
          />
        </li>

        <li>
          <ActiveLink
            name="Insight"
            href="/blogs"
            linkClass={`${isDrop ? styles.darkText : ""} ${styles.navText}`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.contactLink}>
          <Link href="/contact-us">
            <a className="btn-light">Shoot Us A Message</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavTemplate;
