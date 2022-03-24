import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import styles from "./header.module.scss";

type Props = {
  navbar: boolean;
};

const Header: React.FC<Props> = (props) => (
  <header className="border-bottom border-gray-4">
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
          className="rounded-circle"
        />
        <button className="btn-primary ms-4">
          <FontAwesomeIcon icon={faPen} className="me-1" />
          投稿
        </button>
      </div>
    </div>
    {props.navbar && (
      <Navbar
        navs={[
          { label: "ホーム", link: "/" },
          { label: "注目", link: "/recomemend" },
          { label: "toneを学ぶ", link: "/help" },
        ]}
      />
    )}
  </header>
);

export default Header;
