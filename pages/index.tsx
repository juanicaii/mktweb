import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div style={{ minHeight: 5000 }} className={styles.containerMain}>
      <Main />
    </div>
  );
};

export default Home;
