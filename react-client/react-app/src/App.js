import React from "react";
import YoutubeMySpotify from "./components/YoutubeMySpotify";
import AccountManager from "./components/AccountManager";
import WelcomePage from "./components/WelcomePage"
import Header from "./components/Header/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AccountManagerContainer } from "./components/AccountManager/styled";

class App extends React.Component {
  constructor() {
    super();
    this.player = React.createRef();
    this.state = {
      currentUser: this.loadCurrentUser(),
      users: this.loadUsers()
    };
  }

  updateUsers = () => {
    this.setState({ currentUser: this.loadCurrentUser() });
    this.setState({ users: this.loadUsers() });
    this.forceUpdate();
  };

  loadCurrentUser() {
    return JSON.parse(window.localStorage.getItem("currentUser"));
  }

  loadUsers() {
    return JSON.parse(window.localStorage.getItem("users")) || [];
  }

  loadVideoById = id => {
    this.player.current.loadVideoById(id);
  };

  render() {
    return (
      <div>
        <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';" />
        {/* https://www.youtube.com/watch?v=1wDzEjXbblM */}
        <Router>
          <Header {...this.state}></Header>
          <Switch>
            <Route path="/YoutubeMySpotify">
              <YoutubeMySpotify {...this.state.currentUser} />
            </Route>
            <Route path="/AccountManager">
              <AccountManagerContainer>
                <AccountManager updateUsers={() => this.updateUsers()} />
              </AccountManagerContainer>
            </Route>
            <Route path="/">
              <WelcomePage currentUser={this.state.currentUser} users={this.state.users} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
