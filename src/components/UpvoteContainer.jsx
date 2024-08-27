import { useState } from "react";
import UpvoteButton from "./UpvoteButton";
import styles from "./UpvoteContainer.module.css";

export default function UpvoteContainer({ upvotes }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleOnClick() {
    setIsSelected(!isSelected);
  }

  return (
    <div className={styles.container}>
      {upvotes.map((upvote) => {
        return <UpvoteButton key={upvote.id} handleOnClick={handleOnClick} isSelected={isSelected}></UpvoteButton>;
      })}
    </div>
  );
}
