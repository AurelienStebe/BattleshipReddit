import styles from "../styles/ScoreBoard.module.css";

export function ScoreBoard(props) {
  return (
    <section className={styles.scoreBoard}>
      <div className={styles.player1}>
        <span className={styles.score}>00</span>
        <span className={styles.label}>player 1</span>
      </div>

      <div className={styles.player2}>
        <span className={styles.score}>00</span>
        <span className={styles.label}>player 2</span>
      </div>
    </section>
  );
}
