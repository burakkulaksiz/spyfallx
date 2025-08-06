import { useState, useMemo } from "react";
import { LOCATIONS } from "../data/locations";
import type { GameLocation } from "../data/locations";
import styles from "./Game.module.css";
import Modal from "./Modal";

interface Props {
  players: number;
  spies: number;
  onReset: () => void;
}

export default function Game({ players, spies, onReset }: Props) {
  // ✅ Lokasyon ve ajanlar sadece ilk yüklemede belirlenir
  const { locationName, category, spySet } = useMemo(() => {
    const chosen: GameLocation =
      LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

    const spySet = new Set<number>();
    while (spySet.size < spies) {
      spySet.add(Math.floor(Math.random() * players));
    }

    return {
      locationName: chosen.name,
      category: chosen.category,
      spySet,
    };
  }, [players, spies]);

  // Butonların açılıp açılmadığı durumu
  const [opened, setOpened] = useState<boolean[]>(Array(players).fill(false));
  const [current, setCurrent] = useState<string | null>(null);

  const handleClick = (idx: number) => {
    if (opened[idx]) return;

    const text = spySet.has(idx)
      ? `🕵️‍♂️ SEN AJANSIN!\nKategori: ${category}`
      : `📍 Lokasyon: ${locationName}\nKategori: ${category}`;

    setCurrent(text);

    setOpened((prev) => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  const allSeen = opened.every(Boolean);

  return (
    <div className={styles.wrapper}>
      <h2>Oyuncu Kartları</h2>
      <div className={styles.grid}>
        {Array.from({ length: players }).map((_, i) => (
          <button
            key={i}
            disabled={opened[i]}
            onClick={() => handleClick(i)}
            className={opened[i] ? styles.disabled : undefined}
          >
            Oyuncu {i + 1}
          </button>
        ))}
      </div>

      {allSeen && (
        <button className={styles.reset} onClick={onReset}>
          Yeni Oyun
        </button>
      )}

      {current && <Modal text={current} onClose={() => setCurrent(null)} />}
    </div>
  );
}
