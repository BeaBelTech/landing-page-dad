import styles from "./Timer.module.css";
const Timer = () => {
  return (
    <div className={styles.container_ul}>
      <div className={styles.conj_horas}>
        <h3>Days</h3>
        <p>03</p>
      </div>
      <p>:</p>
      <div className={styles.conj_horas}>
        <h3>Hours</h3>
        <p>23</p>
      </div>
      <p>:</p>
      <div className={styles.conj_horas}>
        <h3>Minutes</h3>
        <p>19</p>
      </div>
      <p>:</p>
      <div className={styles.conj_horas}>
        <h3>Seconds</h3>
        <p>56</p>
      </div>
    </div>
  );
};

export default Timer;
