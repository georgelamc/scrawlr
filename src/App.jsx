import UpvoteRow from "./components/UpvoteRow";
import styles from "./App.module.css";
import { useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { IndexContext } from "./contexts/IndexContext";

export default function App() {
  const [rowIds, setRowIds] = useState([]);
  const [upvoteRows, setUpvoteRows] = useState([]);

  function addUpvote(index) {
    setUpvoteRows((prev) => {
      return prev.map((row, i) => {
        if (i === index && row.length < 7) { // No requirement regarding max size
          return [...row, { id: Date.now() }]; // I would probably use some sort of id key from a database
        }
        return row;
      });
    });
  }

  if (rowIds.length === 0) {
    const initialRowIds = [];
    const initialUpvoteRows = [];
    const numRows = 3; // The number of rows is variable
    for (let i = 0; i < numRows; i++) {
      initialRowIds.push(i);
      initialUpvoteRows.push([]);
    }
    setRowIds(initialRowIds);
    setUpvoteRows(initialUpvoteRows);
  }

  return (
    <AppContext.Provider value={{ upvoteRows, addUpvote }}>
      <div className={styles.container}>
        {rowIds.map((index) => {
          // List should be static, so will use index as key for now
          return (
            <IndexContext.Provider value={{ index }}>
              <UpvoteRow key={index}></UpvoteRow>
            </IndexContext.Provider>
          );
        })}
      </div>
    </AppContext.Provider>
  );
}
