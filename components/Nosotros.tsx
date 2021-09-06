import styles from "../styles/Home.module.css";

const Nosotros = () => {
  return (
    <div
      className={styles.nosotros}
      style={{ backgroundImage: "url(./fondo1.png)" }}
    >
      <div className={styles.nosotrosText}>
        <h1>
          Hola, <span>soy Juan!</span>
        </h1>

        <p>
          Soy <span>marketer</span> y estudiante de Administracion de empresa.{" "}
          <br />
          <br />
          Hoy en día el mundo de los negocios <span>cambió</span> y estos deben
          adaptarse a eso. <span>Mi verdadera vocación</span> es ayudar a los
          negocios a adaptarse y no morir en el intento.
          <br /> <br />
          Fundé <span>Flobella Mind</span>, una agencia especializada en generar
          clientes nuevos para cualquier tipo de negocios, con el objetivo de
          poder aportar mi granito de área. Te invito a que charlemos un poco
          sobre tu negocio y encontramos la forma de hacerlo crecer de forma
          digital.
        </p>
      </div>
      <div className={styles.nosotrosImg}>
        <img src="./yo.png" alt="" />
      </div>
    </div>
  );
};

export default Nosotros;
