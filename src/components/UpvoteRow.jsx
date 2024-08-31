import PlusButton from "./PlusButton";
import UpvoteContainer from "./UpvoteContainer";
import styles from "./UpvoteRow.module.css";

export default function UpvoteRow() {
  return (
    <div className={styles.row}>
      <UpvoteContainer></UpvoteContainer>
      <PlusButton></PlusButton>
    </div>
  );
}
