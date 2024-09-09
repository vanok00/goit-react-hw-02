import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.fullContainer}>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}
