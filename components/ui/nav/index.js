import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Dropdown from "../dropdown";
import AboutDrop from "./aboutus";
import ServicesDrop from "./services";
import IndustriesDrop from "./industries";
import PublicServiceDrop from "./publicService";
import PortfolioDrop from "./portfolio";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";
import List from './List';
const Nav = ({ clicked, isDrop, isOpen }) => {
  const [showLang, setShowLang] = useState(false);
  const [about, openAbout] = useState(false);
  const [services, openServices] = useState(false);
  const [industries, openIndustries] = useState(false);
  const [publicService, openPublicService] = useState(false);
  const [portfolio, openPortfolio] = useState(false);

  const router = useRouter();
  useEffect(() => {
    openAbout(false);
    openServices(false);
    openIndustries(false);
    openPublicService(false);
    openPortfolio(false);
  }, [router.pathname]);

  useEffect(() => {
    const hideLang = () => {
      setShowLang(false);
    };

    document.body.addEventListener("click", hideLang);

    return () => {
      document.body.removeEventListener("click", hideLang);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
      openServices(false);
      openIndustries(false);
      openPublicService(false);
      openPortfolio(false);
    }
  }, [isOpen]);
  const [show, setShow] = React.useState();
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={styles.navLinks}>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${about ? styles.boldText : ""} ${
              isDrop ? styles.darkText : ""
            }`}
            onClick={() => {
              openAbout(!about);
              openServices(false);
              openIndustries(false);
              openPublicService(false);
              openPortfolio(false);
              about ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
            onMouseEnter={() => {
              openAbout(!about);
              openServices(false);
              openIndustries(false);
              openPublicService(false);
              openPortfolio(false);
              about ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Who we are</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div className={`${styles.dropdownMenu} ${about ? styles.show : ""}`}>
            <div className={styles.dropdownContainer}
              onMouseLeave={() => {
                openAbout(!about);
                openServices(false);
                openIndustries(false);
                openPublicService(false);
                openPortfolio(false);
                about ? clicked(false) : clicked(true);
                document.querySelector("nav").classList.toggle(styles.hidden);
              }}
            >
              <div className={`${styles.dropdownWrapper} ${styles.about}`}>
                <AboutDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              services ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openServices(!services);
              openAbout(false);
              openIndustries(false);
              openPublicService(false);
              openPortfolio(false);
              services ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
            onMouseEnter={() => {
              openServices(!services);
              openAbout(false);
              openIndustries(false);
              openPublicService(false);
              openPortfolio(false);
              services ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>What we do</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${services ? styles.show : ""}`}
          >
            <div className={styles.dropdownContainer}
              onMouseLeave={() => {
                openServices(!services);
                openAbout(false);
                openIndustries(false);
                openPublicService(false);
                openPortfolio(false);
                services ? clicked(false) : clicked(true);
                document.querySelector("nav").classList.toggle(styles.hidden);
              }}
            >
              <div className={`${styles.dropdownWrapper} ${styles.services}`}>
                <ServicesDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              industries ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openIndustries(!industries);
              openServices(false);
              openAbout(false);
              openPublicService(false);
              openPortfolio(false);
              industries ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
            onMouseEnter={() => {
              openIndustries(!industries);
              openServices(false);
              openAbout(false);
              openPublicService(false);
              openPortfolio(false);
              industries ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Industries and Expertise</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              industries ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}
              onMouseLeave={() => {
                openIndustries(!industries);
                openServices(false);
                openAbout(false);
                openPublicService(false);
                openPortfolio(false);
                industries ? clicked(false) : clicked(true);
                document.querySelector("nav").classList.toggle(styles.hidden);
              }}
            >
              <div className={`${styles.dropdownWrapper} ${styles.industries}`}>
                <IndustriesDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              publicService ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openPublicService(!publicService);
              openIndustries(false);
              openServices(false);
              openAbout(false);
              openPortfolio(false);
              publicService ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
            onMouseEnter={() => {
              openPublicService(!publicService);
              openIndustries(false);
              openServices(false);
              openAbout(false);
              openPortfolio(false);
              publicService ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Public Service</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              publicService ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}
              onMouseLeave={() => {
                openPublicService(!publicService);
                openIndustries(false);
                openServices(false);
                openAbout(false);
                openPortfolio(false);
                publicService ? clicked(false) : clicked(true);
                document.querySelector("nav").classList.toggle(styles.hidden);
              }}
            >
              <div
                className={`${styles.dropdownWrapper} ${styles.publicService}`}
              >
                <PublicServiceDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              portfolio ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openPortfolio(!portfolio);
              openPublicService(false);
              openIndustries(false);
              openServices(false);
              openAbout(false);
              portfolio ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
            onMouseEnter={() => {
              openPortfolio(!portfolio);
              openPublicService(false);
              openIndustries(false);
              openServices(false);
              openAbout(false);
              portfolio ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Portfolio</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${portfolio ? styles.show : ""}`}
          >
            <div className={styles.dropdownContainer}
              onMouseLeave={() => {
                openPortfolio(!portfolio);
                openPublicService(false);
                openIndustries(false);
                openServices(false);
                openAbout(false);
                portfolio ? clicked(false) : clicked(true);
                document.querySelector("nav").classList.toggle(styles.hidden);
              }}
            >
              <div className={`${styles.dropdownWrapper} ${styles.portfolio}`}>
                <PortfolioDrop />
              </div>
            </div>
          </div>
        </li>
        <li>
          <ActiveLink
            name="Insight"
            href="/blogs"
            linkClass={`${isDrop ? styles.darkText : ""}`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.contactLink}>
          <Link href="/contact-us">
            <a className="btn-light">Shoot Us A Message</a>
          </Link>
        </div>
        <div className={`${styles.searchBtn} searchbtnCol`} ref={ref}>
          <button onClick={() => setIsMenuOpen(true)} className={`${isDrop ? styles.darkText : ""}`}>
            <i className="far fa-search"></i>
          </button>
         
            {isMenuOpen && (<div>
            <div className={styles.searchArea}>
              <form>
                  <input onChange={inputHandler} type="text" class="search__field" maxlength="150" placeholder="What are you looking for?…"  title="Search for:"/>
                  <button><i className="far fa-search"></i></button>
              </form>
              <List input={inputText} />
            </div>
          </div>         
           )}
        </div>
          
        <Dropdown
          btnText="EN"
          isDrop={isDrop}
          show={showLang}
          clicked={(e) => {
            e.stopPropagation();

            setShowLang(!showLang);
          }}
        ></Dropdown>
      </div>
    </nav>
  );
};

export default Nav;
