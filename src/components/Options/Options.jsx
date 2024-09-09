import styles from "./Options.module.css";

export default function Options({ good, neutral, bad }) {
  return (
    <div className={styles.container}>
      <button className={styles.buttonGood}>{good}</button>
      <button className={styles.buttonNeutral}>{neutral}</button>
      <button className={styles.buttonBad}>{bad}</button>
    </div>
  );
}
