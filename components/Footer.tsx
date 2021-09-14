import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FontAwesomeIcon
        color="#3751ff"
        onClick={() => {}}
        size="2x"
        icon={faFacebookF}
      />
      <FontAwesomeIcon
        color="#3751ff"
        onClick={() => {}}
        size="2x"
        icon={faInstagram}
      />
      <FontAwesomeIcon
        color="#3751ff"
        onClick={() => {}}
        size="2x"
        icon={faLinkedinIn}
      />
    </div>
  );
};
export default Footer;
