import React, { useState, useEffect } from "react";
import styles from "./Ticker.module.scss";
import TickerTextScroller from "./TickerTextScroller";

const Ticker = () => {
  const [tickerNum, setTickerNum] = useState(0);
  const tickerNumUpdater = () =>
    tickerNum < tickerItems.length - 1
      ? setTickerNum(tickerNum + 1)
      : setTickerNum(0);

  useEffect(() => {
    const tickerUpdater = setInterval(tickerNumUpdater, 12000);
    return () => clearInterval(tickerUpdater);
  }, [tickerNum]);
  const tickerEmoji = ["🤘", "🎮", "📺", "👔", "😪"];
  const tickerLeft = [
    "Listening To",
    "Playing",
    "Watching",
    "Working On",
    "Feeling",
  ];
  const tickerItems = [
    "Jackson 5 - Who's Lovin' You",
    "Grand Theft Auto: San Andreas",
    "Sopranos - Season 6",
    "nology_tech/knowaste",
    "Vibey"
  ];
  return (
    <div className={styles.ticker}>
      <p className={styles.tickerEmoji}>{tickerEmoji[tickerNum]}</p>
      <p className={styles.tickerLeft}>{tickerLeft[tickerNum]}</p>
      <p className={styles.tickerColon}>:</p>
      <TickerTextScroller text={tickerItems[tickerNum]} />
    </div>
  );
};

export default Ticker;
