import { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import styles from "./TrainerCard.module.css";

export default function TrainerCard() {
  const [flipped, setFlipped] = useState(true);

  return (
    <div className={styles.scene}>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ""} ${flipped ? "cursor-pointer" : ""}`}
        onClick={() => flipped && setFlipped(false)}
      >
        <div className={styles.front}>
          <CardFront onFlip={() => setFlipped(true)} />
        </div>
        <div className={styles.back}>
          <CardBack />
        </div>
      </div>
    </div>
  );
}
