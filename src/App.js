import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Header brand="Restaurant Reviews" />
            <Route exact path="/" component={Home} />
            <Route path="/place/:place_id" component={Home} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
