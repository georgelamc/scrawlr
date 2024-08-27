import { useState } from "react";
import PlusButton from "./PlusButton";
import UpvoteContainer from "./UpvoteContainer";
import styles from "./UpvoteRow.module.css";

export default function UpvoteRow() {
  const [isSelected, setIsSelected] = useState("false");
  const [upvotes, setUpvotes] = useState([]);

  function addUpvote() {
    if (upvotes.length < 7) { // No criteria regarding the max number of upvotes.
      setUpvotes([...upvotes, { id: Date.now() }]); // I would normally use a primary key from a database table instead of date.
    }
  }

  function changeUpvote() {
    setIsSelected(!isSelected);
  }

  return (
    <div className={styles.row}>
      <UpvoteContainer handleOnClick={changeUpvote} upvotes={upvotes} isSelected={isSelected}></UpvoteContainer>
      <PlusButton handleOnClick={addUpvote}></PlusButton>
    </div>
  );
}
