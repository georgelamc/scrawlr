import styles from "./Common.module.css";

export default function PlusButton({ handleOnClick }) {
  return (
    <button className={styles.background} onClick={handleOnClick}>
      <img src="/plus.svg" alt="plus icon"></img>
    </button>
  );
}
