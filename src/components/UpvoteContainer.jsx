import UpvoteButton from "./UpvoteButton";
import styles from "./UpvoteContainer.module.css";

export default function UpvoteContainer({ upvotes }) {
  return (
    <div className={styles.container}>
      {upvotes.map((upvote) => {
        return <UpvoteButton key={upvote.id}></UpvoteButton>;
      })}
    </div>
  );
}
