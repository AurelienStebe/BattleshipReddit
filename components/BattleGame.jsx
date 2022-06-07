import React, { Component } from "react";

import styles from "../styles/BattleGame.module.css";

import { ScoreBoard } from "./ScoreBoard";
import { ShipShapes } from "./ShipShapes";
import { BattleGrid } from "./BattleGrid";

export class BattleGame extends Component {
  constructor() {
    super();

    this.state = {
      gameOver: false,
    };
  }

  render() {
    return (
      <section className={styles.battleGame}>
        <ScoreBoard></ScoreBoard>
        <ShipShapes></ShipShapes>
        <BattleGrid></BattleGrid>
      </section>
    );
  }
}
