import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import styles from "./layout.module.css";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>
        {props.title ? props.title : "tone ――つくる、つながる、とどける。"}
      </title>
      {props.description ? (
        <meta name="description" content={props.description} />
      ) : (
        <></>
      )}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.container}>{props.children}</main>
  </>
);

export default Layout;
