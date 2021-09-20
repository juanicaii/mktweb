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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Home: NextPage = () => {
  const datos = {
    numero: "1125857074",
    mensaje: "Quisiera mas informacion",
  };

  return (
    <div className={styles.containerMain}>
      <Main />
      <Services />
      <Nosotros />
      <HowWork />
      <Contact />
      <br />
      <Footer />
      <a
        href={`https://wa.me/${datos.numero}?text=${datos.mensaje.replaceAll(
          " ",
          "%20"
        )}`}
        className={styles.wpp}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <p className={styles.js}>
        <img
          onClick={() => {
            window.location.href = "https://juanignacioseijas.com.ar/ ";
          }}
          src="./JS.svg"
          alt=""
        />
      </p>
    </div>
  );
};

export default Home;
