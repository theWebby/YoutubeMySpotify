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
    return (
      <div>
        <div>AccountManager</div>
        <button onClick={() => window.location.href = LOGIN_URL}>Log in</button>
      </div>
    );
  };
}

export default withRouter(AccountManager);
