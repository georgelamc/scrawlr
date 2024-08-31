import { useContext, useState } from "react";
import UpvoteButton from "./UpvoteButton";
import styles from "./UpvoteContainer.module.css";
import { AppContext } from "../contexts/AppContext";
import { IndexContext } from "../contexts/IndexContext";

export default function UpvoteContainer() {
  const [isSelected, setIsSelected] = useState(false);

  const { index } = useContext(IndexContext);
  const { upvoteRows } = useContext(AppContext);

  function handleOnClick() {
    setIsSelected(!isSelected);
  }

  return (
    <div className={styles.container}>
      {upvoteRows[index].map((upvote) => {
        return <UpvoteButton key={upvote.id} handleOnClick={handleOnClick} isSelected={isSelected}></UpvoteButton>;
      })}
    </div>
  );
}
