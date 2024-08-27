import styles from "./PlusButton.module.css";

export default function PlusButton({ handleOnClick }) {
  return (
    <button className={`buttonBackground ${styles.background}`} onClick={handleOnClick}>
      <img src="/plus.svg" alt="plus icon"></img>
    </button>
  );
}
