import styles from "../styles/BattleGrid.module.css";

import Image from "next/image";

import missIcon from "../public/assets/Miss.png";
import hitIcon from "../public/assets/Hit.png";

export function BattleGrid(props) {
  const grid = [...Array(10)].map((x) => Array(10).fill(0));

  return (
    <section className={styles.battleGrid}>
      {grid.map((row, i) =>
        row.map((cell, j) => {
          return (
            <div className={styles.gridCell} key={i + "-" + j}>
              <Image src={missIcon} layout="responsive" alt="MISS"></Image>
            </div>
          );
        })
      )}
    </section>
  );
}
