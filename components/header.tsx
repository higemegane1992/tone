import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";
import utilStyles from "../styles/utils.module.css";

const Header: React.FC = () => (
  <header className={utilStyles.border4}>
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.logo}>
          <Image src="/tone.svg" height={25} width={98} alt="tone" />
        </a>
      </Link>
      <div className={styles.menu}>
        <Image
          src="/profile.png"
          height={32}
          width={32}
          alt="profile"
          className={utilStyles.roundedCircle}
        />
        <button className={`${utilStyles.btnPrimary} ${utilStyles.ml4}`}>
          <FontAwesomeIcon icon={faPen} className={utilStyles.mr1} />
          投稿
        </button>
      </div>
    </div>
  </header>
);

export default Header;
