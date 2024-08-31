import UpvoteRow from "./components/UpvoteRow";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { AppContext } from "./contexts/AppContext";
import { IndexContext } from "./contexts/IndexContext";

export default function App() {
  const [rowIds, setRowIds] = useState([]);
  const [upvoteRows, setUpvoteRows] = useState([]);
  const [rowStates, setRowStates] = useState([]);

  const LOCAL_STORAGE_KEY_IDS = "ids";
  const LOCAL_STORAGE_KEY_UPVOTES = "upvotes";
  const LOCAL_STORAGE_KEY_STATES = "states";

  useEffect(() => {
    const initialRowIds = loadData(LOCAL_STORAGE_KEY_IDS);
    const initialUpvoteRows = loadData(LOCAL_STORAGE_KEY_UPVOTES);
    const initialStates = loadData(LOCAL_STORAGE_KEY_STATES);
    const numRows = initialRowIds.length > 0 ? initialRowIds.length : 3; // The number of rows is variable
    if (initialRowIds.length === 0) {
      for (let i = 0; i < numRows; i++) {
        initialRowIds.push(i);
        initialUpvoteRows.push([]);
        initialStates.push(false);
      }
      saveData(LOCAL_STORAGE_KEY_IDS, initialRowIds);
    }
    setRowIds(initialRowIds);
    setUpvoteRows(initialUpvoteRows);
    setRowStates(initialStates);
  }, []);

  useEffect(() => {
    saveData(LOCAL_STORAGE_KEY_UPVOTES, upvoteRows);
  }, [upvoteRows]);

  useEffect(() => {
    saveData(LOCAL_STORAGE_KEY_STATES, rowStates);
  }, [rowStates]);

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

  function updateState(index) {
    setRowStates((prev) => {
      return prev.map((state, i) => {
        if (i === index) {
          return !state;
        }
        return state;
      });
    })
  }

  return (
    <AppContext.Provider value={{ upvoteRows, rowStates, addUpvote, updateState }}>
      <div className={styles.container}>
        {rowIds.map((index) => {
          // List should be static, so will use index as key for now
          return (
            <IndexContext.Provider key={index} value={{ index }}>
              <UpvoteRow key={index}></UpvoteRow>
            </IndexContext.Provider>
          );
        })}
      </div>
    </AppContext.Provider>
  );
}
