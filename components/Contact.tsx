import { useDisclosure } from "@chakra-ui/hooks";
import styles from "../styles/Home.module.css";
import ModalContact from "./ModalContact";
const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{ backgroundImage: "url(./fondo.png)" }}
      className={styles.divContact}
    >
      <p>Contanos acerca de tu negocio y te asesoramos de forma gratuita</p>
      <button onClick={onOpen}>Agenda una reunion</button>
      <ModalContact isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
export default Contact;
