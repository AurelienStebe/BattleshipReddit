import Head from "next/head";

import styles from "../styles/Home.module.css";
import { BattleGame } from "../components/BattleGame.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Battleship</title>
        <meta name="description" content="Reddit Battleship" />
      </Head>

      <main className={styles.main}>
        <BattleGame></BattleGame>
      </main>
    </div>
  );
}
