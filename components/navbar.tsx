import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./navbar.module.scss";

type Props = {
  navs: {
    label: string;
    link: `/${string}`;
  }[];
};

const Navbar: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        {props.navs.map((nav, key) => (
          <li className={styles.navItem} key={key}>
            <Link href={nav.link}>
              <a
                className={
                  router.asPath === nav.link
                    ? `${styles.navLink} ${styles.isActive}`
                    : styles.navLink
                }
              >
                {nav.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
