import { useState } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import styles from "./App.module.css";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={styles.fullContainer}>
      <Description />
      <Options onFeedbackChange={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}
