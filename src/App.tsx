import { useState } from "react";
import Setup from "./components/Setup";
import Game from "./components/Game";
import styles from "./App.module.css";

function App() {
  const [players, setPlayers] = useState<number | null>(null);
  const [spies, setSpies] = useState<number>(1);

  if (players === null) {
    return (
      <div className={styles.container}>
        <h1>🕵️‍♀️ Asil Spyfall X</h1>
        <Setup
          onStart={(p, s) => {
            setPlayers(p);
            setSpies(s);
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Game
        players={players}
        spies={spies}
        onReset={() => setPlayers(null)}
      />
    </div>
  );
}

export default App;
