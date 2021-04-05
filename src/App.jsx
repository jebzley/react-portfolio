import { useState } from "react";
import TopBar from "./components/TopBar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Article";
import styles from "./App.module.scss";
import MinesweeperText from "./components/Article/ArticleText/MinesweeperText";
import MorseText from "./components/Article/ArticleText/MorseText";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pageTitle, setPageTitle] = useState("");

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.topBarWrapper}>
          <TopBar title={pageTitle} />
        </header>

        <main className={styles.contentWrapper}>
          <Switch>
            <Route path="/minesweeper">
              <Article
                setTitle={() => setPageTitle("Minesweeper")}
                tagline={"Childhood memories in your browser"}
                imgSrc={
                  "https://raw.githubusercontent.com/jebzley/minesweeper/master/img/readme_head.png"
                }
                text={<MinesweeperText />}
              />
            </Route>
            <Route path="/morsetranslator">
              <Article
                setTitle={() => setPageTitle("Morse Code Translator")}
                tagline={"English to Morse, Morse to English"}
                imgSrc={
                  "https://raw.githubusercontent.com/jebzley/morse-translator/master/assets/img/readme_head.png"
                }
                text={<MorseText />}
              />
            </Route>
            <Route path="/contact">
              <Contact setTitle={setPageTitle} />
            </Route>
            <Route path="/about">
              <About setTitle={setPageTitle} />
            </Route>
            <Route path="/work">
              <Work setTitle={setPageTitle} />
            </Route>
            <Route path="/">
              <Landing setTitle={setPageTitle} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
