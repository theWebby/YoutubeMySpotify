import React from "react";
import { LOGIN_URL } from '../../constants';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'

class AccountManager extends React.Component {
  constructor(props) {
    super();
    const params = queryString.parse(props.location.search);
    this.state = {
      currentUser: {
        accessToken: params.access_token,
        refreshToken: params.refresh_token
      }
    }
    
  }

  setCurrentUser = () => {
    window.localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser));
  }

  render = () => {
    if (this.state.currentUser.accessToken){
      return (
        <div>
          Would you like to stay logged in?
          {/* make call to user profile on spotify and find user account */}
        </div>
      )
    }
    else{
      return (
        <div>
          <div>
            Here is a list of your accounts
          </div>
          <div>
            Would you like to add a new one?
            <button onClick={() => window.location.href = LOGIN_URL}>Log in</button>
          </div>
        </div>
      )
    }

    // return (
    //   <div>
    //     <div>AccountManager</div>
    //     <button onClick={() => window.location.href = LOGIN_URL}>Log in</button>
    //   </div>
    // );
  };
}

export default withRouter(AccountManager);
