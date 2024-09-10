import styles from "./Notification.module.css";

export default function Notification({ message }) {
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
}
