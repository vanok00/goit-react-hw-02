import styles from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => updateFeedback("good")}
        className={styles.buttonGood}
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.buttonNeutral}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className={styles.buttonBad}
      >
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
