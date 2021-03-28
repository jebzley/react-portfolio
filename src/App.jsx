import TopBar from "./components/TopBar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import About from "./components/About";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className={styles.App}>
      <div className={styles.topBarWrapper}>
        <TopBar />
      </div>

      <div className={styles.contentWrapper}>
        
          <Switch>
          <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/" exact component={Landing} />
          </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
