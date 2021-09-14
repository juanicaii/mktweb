import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Services from "../components/Services";
import Nosotros from "../components/Nosotros";
import HowWork from "../components/HowWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useRef } from "react";
const Home: NextPage = () => {
  return (
    <div className={styles.containerMain}>
      <Main />
      <Services />
      <Nosotros />
      <HowWork />
      <Contact />
      <br />
      <Footer />

      <p className={styles.js}>
        <img
          onClick={() => {
            window.location.href = "https://juanignacioseijas.com.ar/";
          }}
          src="./JS.svg"
          alt=""
        />
      </p>
    </div>
  );
};

export default Home;
