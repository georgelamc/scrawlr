import styles from "./Common.module.css";

export default function UpvoteButton() {
  return (
    <button className={styles.background}>
      <img src="/arrow-up.svg" alt="Up arrow"></img>
    </button>
  );
}
