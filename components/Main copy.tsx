import styles from "../styles/Home.module.css";

const Main = () => {
  return (
    <div className={`${styles.main}`}>
      <video autoPlay muted src={require("../public/fondo.mp4")} />
    </div>
  );
};

export default Main;
