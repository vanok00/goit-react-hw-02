import styles from "./Feedback.module.css";

export default function Feedback() {
  return (
    <div className={styles.container}>
      <p>Good:</p>
      <p>Neutral:</p>
      <p>Bad:</p>
    </div>
  );
}
