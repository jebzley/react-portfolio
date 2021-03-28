import TopBar from "./components/TopBar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.topBarWrapper}>
          <TopBar />
        </header>

        <main className={styles.contentWrapper}>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
