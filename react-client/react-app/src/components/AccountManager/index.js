import React from "react";
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'
import SpotifyApi from '../../api/spotifyApi'
import AccountSummary from "./AccountSummary"
import StoredUser from "./StoredUser"
import { StyledButton as Button, FacebookNotice } from "./styled"
import { setCurrentUser, loadUsers, setUsers, addNewAccountRedirect } from './helpers'

class AccountManager extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: this.getCurrentUserFromLocation(props.location),
      users: this.getStoredUsers()
    }

    this.spotifyApi = new SpotifyApi(this.state.currentUser.accessToken, this.state.currentUser.refresh_token)
  }

  updateUsers = () => {
    this.setState({ users: loadUsers() })
    this.props.updateUsers();
  }

  getStoredUsers() {
    const users = loadUsers();
    return users;
  }

  getCurrentUserFromLocation(location) {
    const params = queryString.parse(location.search);
    const { access_token, refresh_token } = params
    return {
      accessToken: access_token,
      refreshToken: refresh_token
    }
  }

  async getUserProfile() {
    if (!this.spotifyApi.accessToken) {
      return
    }

    const userProfile = await this.spotifyApi.getProfile();

    const { currentUser } = this.state;
    currentUser.profile = userProfile

    this.setState({ currentUser });
  }

  async componentDidMount() {
    this.getUserProfile()
  }


  storeCurrentUser = (stayLoggedIn) => {
    const { currentUser, users } = this.state;

    if (stayLoggedIn) {
      const newUserId = currentUser.profile.id

      if (!users.some(user => user.profile.id === newUserId)) {
        users.push(currentUser);
        this.setState({ users })
      }
    }

    setCurrentUser(currentUser);
    setUsers(users)

    // this.spotifyLogout();

    this.props.updateUsers()
    this.props.history.push("/YoutubeMySpotify");
  }

  render = () => {
    const { currentUser, users } = this.state;

    if (currentUser.refreshToken && currentUser.profile) {
      return (
        <div>
          <p>Would you like to stay logged in?</p>
          <br />
          <AccountSummary {...currentUser} />
          <Button variant="secondary" onClick={() => this.storeCurrentUser(false)}>No Thanks</Button>
          <Button onClick={() => this.storeCurrentUser(true)}>Yes Please!</Button>

          <FacebookNotice>If you wish to sign in using a different facebook account, you must first <a target="_blank" href="https://www.facebook.com">log out</a> of your current facebook account.</FacebookNotice>
        </div>
      )
    }
    else {
      return (
        <div>

          <p>{users.length ? 'Your saved accounts...' : 'No Accounts'}</p>
          {users.map((user, index) => <StoredUser user={user} updateUsers={this.updateUsers} key={index} />)}
          <br />
          <Button onClick={() => addNewAccountRedirect()}>Add a new Account</Button>

        </div>
      )
    }
  };
}

export default withRouter(AccountManager);
