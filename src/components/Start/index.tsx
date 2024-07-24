import { useMainContext } from "../../context/mainContext";

import Arrows from "../../assets/images/arrows.png";

import styles from "./styles.module.scss";

export default function StartModal() {
  const { startGame, docRef } = useMainContext();

  const startHandle = () => {
    startGame();
    docRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <h1>let's play ?</h1>
      <p>Follow the instructions</p>
      <img src={Arrows} width="180" alt="Use as teclas W, A, S, D" />
      <button onClick={startHandle}>Play!</button>
    </div>
  );
}
