import { useRouteError } from "react-router-dom";
import styles from "./ErrorMessage.module.css";
function ErrorMessage() {
  const error = useRouteError();
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>{error.message}</p>
    </div>
  );
}

export default ErrorMessage;
