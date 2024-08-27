import styles from "./Common.module.css";

export default function UpvoteButton({ handleOnClick }) {
  return (
    <button className={styles.background} onClick={handleOnClick}>
      <img src="/arrow-up.svg" alt="Up arrow"></img>
    </button>
  );
}
