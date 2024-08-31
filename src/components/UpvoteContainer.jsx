import { useContext } from "react";
import UpvoteButton from "./UpvoteButton";
import styles from "./UpvoteContainer.module.css";
import { AppContext } from "../contexts/AppContext";
import { IndexContext } from "../contexts/IndexContext";

export default function UpvoteContainer() {
  const { index } = useContext(IndexContext);
  const { upvoteRows, rowStates, updateState } = useContext(AppContext);

  return (
    <div className={`upvoteContainer ${styles.container}`}>
      {upvoteRows[index].map((upvote) => {
        return <UpvoteButton key={upvote.id} handleOnClick={() => updateState(index)} isSelected={rowStates[index]}></UpvoteButton>;
      })}
    </div>
  );
}
