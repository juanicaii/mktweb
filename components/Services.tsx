import styles from "../styles/Home.module.css";
import Service from "./Service";

const DataServices = [
  {
    image: "google.png",
    title: `SEM`,
    info: `
    Creamos anuncios en el motor de busqueda Google Ads`,
  },
  {
    image: "megafono.png",
    title: `Campañas de ads`,
    info: `
    Aumentamos tu presencia en las redes sociales con anuncios pagos`,
  },
  {
    image: "like.png",
    title: `Gestion de redes sociales `,
    info: `
    Planificamos y gestionamos los contenidos en tus redes sociales`,
  },
  {
    image: "inbound.png",
    title: `Inbound Marketing`,
    info: `
    Utilizamos la metodologia inbound para atraer mas clientes a tu negocio`,
  },
  {
    image: "email marketing.png",
    title: `Email Marketing`,
    info: `
    Planificamos y realizamos campañas de correo electronico`,
  },
  {
    image: "cart.png",
    title: `E-Commerce`,
    info: `
    Gestionamos el ecosistema digital de tu negocio online`,
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h1 className={styles.servicesTitle}>
        Aumenta tu presencia digital con nuestros servicios
      </h1>
      <h4 className={styles.servicesSubtitle}>
        Nuestro objetivo es conseguir más clientes a tu negocio utilizando las
        mejores estrategias de marketing
      </h4>

      <div className={styles.containerServices}>
        {DataServices.map((element, index) => (
          <Service
            key={index}
            image={element.image}
            title={element.title}
            info={element.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
