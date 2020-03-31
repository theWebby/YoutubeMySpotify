import React from "react";
import YoutubeMySpotify from "./components/YoutubeMySpotify";
import AccountManager from "./components/AccountManager";
import Header from "./components/Header/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  loginCallback = () => {
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
        <Header {...this.state}></Header>
        <Router>
          <Switch>
            <Route path="/YoutubeMySpotify">
              <YoutubeMySpotify {...this.state.currentUser}/>
            </Route>
            {/* <Route path="/AccountManager">
              <AccountManagerContainer>
                <AccountManager />
              </AccountManagerContainer>
            </Route> */}
            <Route path="/">
              <AccountManagerContainer>
                <AccountManager loginCallback={() => this.loginCallback()}/>
              </AccountManagerContainer>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
