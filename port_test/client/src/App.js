import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"

function App(){
  
    return (
      <Router>
        <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route exact path="/Projects" component={Projects}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
