import UpvoteRow from "./components/UpvoteRow";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <UpvoteRow></UpvoteRow>
      <UpvoteRow></UpvoteRow>
      <UpvoteRow></UpvoteRow>
    </div>
  );
}
