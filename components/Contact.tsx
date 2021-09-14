import styles from "../styles/Home.module.css";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: "url(./fondo.png)" }}
      className={styles.divContact}
    >
      <p>Contanos acerca de tu negocio y te asesoramos de forma gratuita</p>
      <button>Agenda una reunion</button>
    </div>
  );
};
export default Contact;
