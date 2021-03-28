import React, { useState, useEffect } from "react";
import styles from "./Ticker.module.scss";
const Ticker = () => {
  const [tickerNum, setTickerNum] = useState(0);
  const tickerNumUpdater = () =>
    tickerNum < tickerItems.length
      ? setTickerNum(tickerNum + 1)
      : setTickerNum(0);

  useEffect(() => {
    const tickerUpdater = setInterval(tickerNumUpdater, 2000);
    return () => clearInterval(tickerUpdater);
  }, []);

  const tickerItems = [
    <p>
      🤘 <strong>Listening To : </strong>Jackson 5 - Who's Lovin' You
    </p>,
    <p>
      🎮 <strong>Playing : </strong>Grand Theft Auto: San Andreas
    </p>,
    <p>
      📺 <strong>Watching : </strong>Sopranos - Season 6
    </p>,
    <p>
      👔 <strong>Working On : </strong>nology_tech/knowaste
    </p>,
    <p>
      😪 <strong>Mood : </strong>Apathetic
    </p>,
  ];
  return (
    <div className={styles.ticker}>
      <p className={styles.tickerEmoji}>🤘</p>
      <p className={styles.tickerLeft}>Listening To</p>
      <p className={styles.tickerColon}>:</p>
      <p className={styles.tickerItem}>Jackson 5 - Who's Lovin' You</p>
    </div>
  );
};

export default Ticker;
