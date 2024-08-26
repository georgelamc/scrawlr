import styles from "./PlusButton.module.css";

export default function PlusButton() {
  return (
    <button className={styles.background}>
      <img src="/plus.svg" alt="plus icon"></img>
    </button>
  );
}
