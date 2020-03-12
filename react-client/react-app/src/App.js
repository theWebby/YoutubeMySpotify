import React from "react";
import YoutubeMySpotify from "./components/YoutubeMySpotify";
import AccountManager from "./components/AccountManager";
import Header from "./components/Header/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AccountManagerContainer } from "./components/AccountManager/styled";

class App extends React.Component {
  constructor() {
    super();
    this.player = React.createRef();
    this.state = {
      currentUser: this.loadCurrentUser()
    };
  }

  loginCallback = () => {
    this.setState({ currentUser: this.loadCurrentUser() });
    this.forceUpdate();
  };

  loadCurrentUser() {
    return JSON.parse(window.localStorage.getItem("currentUser"));
  }

  loadVideoById = id => {
    this.player.current.loadVideoById(id);
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/YoutubeMySpotify">
              <YoutubeMySpotify />
            </Route>
            <Route path="/AccountManager">
              <AccountManagerContainer>
                <AccountManager />
              </AccountManagerContainer>
            </Route>
            <Route path="/">
            <AccountManagerContainer>
                <AccountManager />
              </AccountManagerContainer>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
