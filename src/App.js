import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";

import PageHome from "./PageHome";
import PageAbout from "./PageAbout";
import PageContact from "./PageContact";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/about" component={PageAbout} />
        <Route exact path="/contact" component={PageContact} />
      </HashRouter>
    </div>
  );
}

export default App;
