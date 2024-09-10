import styles from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedBack,
  totalFeedBack,
}) {
  return (
    <div>
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
      {totalFeedBack > 0 && <button onClick={resetFeedBack}>Reset</button>}
    </div>
  );
}
