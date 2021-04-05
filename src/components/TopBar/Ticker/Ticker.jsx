import React, { useState, useEffect } from "react";
import styles from "./Ticker.module.scss";
import TickerTextScroller from "./TickerTextScroller";
import { currentlyPlaying } from "../../../services/steam.service.js";
import { listeningTo } from "../../../services/spotify.service.js";
import { workingOn } from "../../../services/github.service.js";

const Ticker = () => {
  const [game, setGame] = useState("");
  const [song, setSong] = useState("");
  const [project, setProject] = useState("");

  const [tickerNum, setTickerNum] = useState(0);

  const tickerNumUpdater = () =>
    tickerNum < tickerItems.length - 1
      ? setTickerNum(tickerNum + 1)
      : setTickerNum(0);

  useEffect(() => {
    const tickerUpdater = setInterval(tickerNumUpdater, 12000);
    return () => clearInterval(tickerUpdater);
  }, [tickerNum]);

  useEffect(() => {
    listeningTo.then((response) => {
      setSong(`${response.artists[0].name} - ${response.songName}`);
    });
    currentlyPlaying.then((response) => {
      setGame(response);
    });
    workingOn.then((response) => {
      setProject(response[0].repo.name);
    });
  }, []);

  const tickerEmoji = ["🤘", "🎮", "📺", "👔", "😪"];
  const tickerLeft = [
    "Listening To",
    "Playing",
    "Watching",
    "Working On",
    "Feeling",
  ];
  
  const tickerItems = [song, game, "Sopranos - Season 6", project, "Vibey"];
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
