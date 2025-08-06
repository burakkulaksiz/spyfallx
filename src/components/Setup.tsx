import { useState } from "react";
import styles from "./Setup.module.css";

interface Props {
  onStart: (players: number, spies: number) => void;
}

export default function Setup({ onStart }: Props) {
  const [players, setPlayers] = useState(4);
  const [spies, setSpies]   = useState(1);

  const valid = players >= 3 && spies >= 1 && spies < players;

  return (
    <div className={styles.wrapper}>
      <h2>Oyunu Kur</h2>

      <label>
        Oyuncu sayısı
        <input
          type="number"
          min={3}
          value={players}
          onChange={(e) => setPlayers(+e.target.value)}
        />
      </label>

      <label>
        Ajan sayısı
        <input
          type="number"
          min={1}
          max={players - 1}
          value={spies}
          onChange={(e) => setSpies(+e.target.value)}
        />
      </label>

      <button
        className={styles.start}
        disabled={!valid}
        onClick={() => onStart(players, spies)}
      >
        Oyunu Başlat
      </button>
    </div>
  );
}
