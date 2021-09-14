import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const urls = [
  { url: "", name: "Servicios" },
  { url: "", name: "Nosotros" },
  { url: "", name: "Como Trabajamos" },
  { url: "", name: "Nuestros Trabajos" },
];

interface IHeaderMobileProps {
  isOpen: any;
  setIsOpen: any;
}

export const HeaderMobile = ({ isOpen, setIsOpen }: IHeaderMobileProps) => {
  return (
    <>
      <div className={`${styles.headerMobile}`}>
        {/* MENU */}
        <div className={`${styles.menu}`}>
          <FontAwesomeIcon
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            icon={isOpen ? faTimes : faBars}
          />
        </div>
        {/* Logo */}
        <div className={`${styles.containerLogo}`}>
          <img className={styles.logo} src={"./logo.png"} alt="Logo" />
        </div>
        {/* Contact */}
        <div className={`${styles.containerContact}`}>
          <button className={`${styles.contact}`}>Contacto</button>
        </div>
        <div
          style={{
            left: isOpen ? 0 : "-18em",
            backgroundImage: "url(./fondo-vertical.png)",
          }}
          className={styles.containerNavMob}
        >
          <div className={styles.closeNav}>
            <FontAwesomeIcon
              onClick={() => setIsOpen(!isOpen)}
              size="2x"
              icon={faTimes}
            />
          </div>
          <ul>
            {urls.map((url) => (
              <li key={url.name} className={`${styles.item}`}>
                {url.name}
              </li>
            ))}
          </ul>
        </div>
        {/* 
        Nav

        {/* <div className={`${styles.containerNav}`}>
         
        </div> */}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      {/* Logo */}
      <div className={`${styles.containerLogo}`}>
        <img className={styles.logo} src={"./logo.png"} alt="Logo" />
      </div>
      {/* Nav */}
      <div className={`${styles.containerNav}`}>
        <ul className={`${styles.nav}`}>
          {urls.map((url) => (
            <li key={url.name} className={`${styles.item}`}>
              <a href=""> {url.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact */}
      <div className={`${styles.containerContact}`}>
        <button className={`${styles.contact}`}>Contacto</button>
      </div>
    </div>
  );
};

export default Header;
