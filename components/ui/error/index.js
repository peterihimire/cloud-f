import styles from "./styles.module.scss";

const ErrorOccured = () => {
  return (
    <>
      <div className={styles.header} />
      <div className={styles.container}>
        <h4>404 - Page Not Found</h4>
      </div>
    </>
  );
};

export default ErrorOccured;
