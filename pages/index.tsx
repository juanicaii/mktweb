import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Services from "../components/Services";
import Nosotros from "../components/Nosotros";
const Home: NextPage = () => {
  return (
    <div style={{ minHeight: 5000 }} className={styles.containerMain}>
      <Main />
      <Services />
      <Nosotros />
    </div>
  );
};

export default Home;
