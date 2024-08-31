import UpvoteRow from "./components/UpvoteRow";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { IndexContext } from "./contexts/IndexContext";

export default function App() {
  const [rowIds, setRowIds] = useState([]);
  const [upvoteRows, setUpvoteRows] = useState([]);

  const LOCAL_STORAGE_KEY_IDS = "ids";
  const LOCAL_STORAGE_KEY_UPVOTES = "upvotes";

  useEffect(() => {
    const initialRowIds = loadData(LOCAL_STORAGE_KEY_IDS);
    const initialUpvoteRows = loadData(LOCAL_STORAGE_KEY_UPVOTES);
    const numRows = initialRowIds.length > 0 ? initialRowIds.length : 3; // The number of rows is variable
    if (initialRowIds.length === 0) {
      for (let i = 0; i < numRows; i++) {
        initialRowIds.push(i);
        initialUpvoteRows.push([]);
      }
      saveData(LOCAL_STORAGE_KEY_IDS, initialRowIds);
    }
    setRowIds(initialRowIds);
    setUpvoteRows(initialUpvoteRows);
  }, []);

  useEffect(() => {
    saveData(LOCAL_STORAGE_KEY_UPVOTES, upvoteRows);
  }, [upvoteRows]);

  function loadData(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  }

  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

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
