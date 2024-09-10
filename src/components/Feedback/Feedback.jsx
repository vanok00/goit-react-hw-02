import PropTypes from "prop-types"; // Імпортуємо PropTypes
import styles from "./Feedback.module.css";

export default function Feedback({ feedback }) {
  return (
    <div className={styles.container}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
}

// Додаємо валідацію пропсів
Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
