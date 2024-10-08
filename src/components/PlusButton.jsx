import { useContext } from "react";
import styles from "./PlusButton.module.css";
import { AppContext } from "../contexts/AppContext";
import { IndexContext } from "../contexts/IndexContext";

export default function PlusButton() {
  const { index } = useContext(IndexContext);
  const { addUpvote } = useContext(AppContext);

  return (
    <button className={`plusButton buttonBackground ${styles.background}`} onClick={() => addUpvote(index)}>
      <img src="/plus.svg" alt="plus icon"></img>
    </button>
  );
}
