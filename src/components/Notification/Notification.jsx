import PropTypes from "prop-types";
import styles from "./Notification.module.css";

export default function Notification({ message }) {
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
