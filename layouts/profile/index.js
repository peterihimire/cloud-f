import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const ProfileSubLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.layout}>
      <nav className={styles.profileNav}>
        <ul>
          <li>
            <Link href="/profile/edit-profile">
              <a
                className={`${styles.link} ${
                  router.pathname === "/profile/edit-profile"
                    ? styles.active
                    : ""
                }`}
              >
                EDIT PROFILE
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile/saved-jobs">
              <a
                className={`${styles.link} ${
                  router.pathname === "/profile/saved-jobs" ? styles.active : ""
                }`}
              >
                SAVED JOBS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile/our-team">
              <a
                className={`${styles.link} ${
                  router.pathname === "/profile/our-team" ? styles.active : ""
                }`}
              >
                OUR TEAM
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile/recommended-jobs">
              <a
                className={`${styles.link} ${
                  router.pathname === "/profile/recommended-jobs"
                    ? styles.active
                    : ""
                }`}
              >
                RECOMMENDED JOBS
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default ProfileSubLayout;
