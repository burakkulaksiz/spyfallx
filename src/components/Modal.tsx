import styles from "./Modal.module.css";

interface Props {
  text: string;
  onClose: () => void;
}

export default function Modal({ text, onClose }: Props) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.box}>
        <p>{text}</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
}
