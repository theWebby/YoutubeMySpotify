import React from "react";
import { LOGIN_URL } from '../../constants';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'
import SpotifyApi from '../../api/spotifyApi'
import AccountSummary from "./AccountSummary"
import StoredUser from "./StoredUser"
import { StyledButton as Button } from "./styled"
import { setCurrentUser, getUsers, setUsers } from './helpers'

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
    this.setState({users: getUsers()})
  }

  getStoredUsers(){
    const users = getUsers();
    return users;
  }

  getCurrentUserFromLocation(location){
    const params = queryString.parse(location.search);
    const {access_token, refresh_token} = params
    return {
      accessToken: access_token,
      refreshToken: refresh_token
    }
  }

  async getUserProfile(){
    if(!this.spotifyApi.accessToken){
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

    if(stayLoggedIn){
      const newUserId = currentUser.profile.id

      if (!users.some(user => user.profile.id === newUserId)){
        users.push(currentUser);
        this.setState({users})
      }
    }

    setCurrentUser(currentUser);
    setUsers(users)

    this.props.loginCallback()
    this.props.history.push("/YoutubeMySpotify");
  }

  render = () => {
    const { currentUser, users } = this.state;
    
    if (currentUser.refreshToken && currentUser.profile){
      return (
        <div>
          <p>Would you like to stay logged in?</p>
          <br />
          <AccountSummary {...currentUser} />
          <Button variant="secondary" onClick={() => this.storeCurrentUser(false)}>No Thanks</Button>
          <Button onClick={() => this.storeCurrentUser(true)}>Yes Please!</Button>
        </div>
      )
    }
    else{
      return (
        <div>

          <p>{users.length ? 'Your saved accounts...' : 'No Accounts'}</p>
          {users.map((user, index) => <StoredUser user={user} updateUsers={this.updateUsers} key={index}/>)}
          <br />
          <Button onClick={() => window.location.href = LOGIN_URL}>Add a new Account</Button>
        
        </div>
      )
    }
  };
}

export default withRouter(AccountManager);
