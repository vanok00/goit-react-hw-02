import PropTypes from "prop-types";
import styles from "./Options.module.css";

export default function Options({ onFeedbackChange }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => onFeedbackChange("good")}
        className={styles.buttonGood}
      >
        Good
      </button>
      <button
        onClick={() => onFeedbackChange("neutral")}
        className={styles.buttonNeutral}
      >
        Neutral
      </button>
      <button
        onClick={() => onFeedbackChange("bad")}
        className={styles.buttonBad}
      >
        Bad
      </button>
      <button
        onClick={() => onFeedbackChange("reset")}
        className={styles.buttonReset}
      >
        Reset
      </button>
    </div>
  );
}

Options.propTypes = {
  onFeedbackChange: PropTypes.func.isRequired,
};
