import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Services from "../components/Services";
import Nosotros from "../components/Nosotros";
import HowWork from "../components/HowWork";
import { useRef } from "react";
const Home: NextPage = () => {
  return (
    <div className={styles.containerMain}>
      <Main />
      <Services />
      <Nosotros />
      <HowWork />
    </div>
  );
};

export default Home;
