import styles from "../styles/Home.module.css";

interface IService {
  image: string;
  title: string;
  info: string;
}

const Service = ({ image, title, info }: IService) => {
  return (
    <div className={styles.containerService}>
      <div
        style={{ backgroundImage: `url('./services/${image}')` }}
        className={styles.serviceImg}
      ></div>
      <p className={styles.serviceTitle}>{title}</p>
      <p className={styles.serviceInfo}>{info}</p>
    </div>
  );
};
export default Service;
