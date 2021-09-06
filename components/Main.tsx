import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div
      style={{ backgroundImage: "url(./fondo.png)" }}
      className={`${styles.main}`}
    >
      <div style={{ height: "inherit" }}>
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          exit={{ scale: 1 }}
          className={styles.iso}
          src="./isotipo.png"
          alt=""
        />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.mainTitle}>
          <Typewriter
            //@ts-ignore
            wrapperClassName={"mainTitle"}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `#Somos <span style="color:#ffbb32" >Flobella</span>`
                )

                .start();
            }}
          />
        </div>

        <motion.h4
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 3 }}
          className={styles.mainSubTitle}
        >
          Somos tu aliado estrategico
        </motion.h4>
        <motion.p
          transition={{ duration: 1.3 }}
          initial={{ opacity: 0, x: -320 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.mainParraf}
        >
          El mundo del los negocios cambio Estas preparado para la
          transformacion digital?
          <br />
          El cambio es ahora y Flobella puede ayudartea conseguir mas clientes
        </motion.p>
      </div>
    </div>
  );
};

export default Main;
