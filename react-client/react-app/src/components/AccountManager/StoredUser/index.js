import React from "react";
import { StoredUserContainer, ProfilePicture, Name, DeleteAccount } from './styled'
import { setCurrentUser, deleteUser } from '../helpers'
import { withRouter } from 'react-router-dom'


class StoredUser extends React.Component {
  constructor(props) {
    console.log(props)
    super();
  }

  preventBubble = (e) => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  deleteAccountHandler = (e) => {
    this.preventBubble(e)
    deleteUser(this.props.user)
    this.props.updateUsers();
  }

  useAccountHandler = (e) => {
    setCurrentUser(this.props.user)
    this.props.history.push("/YoutubeMySpotify");
  }

  render = () => {
    const { profile } = this.props.user;

    return (
      <StoredUserContainer onClick={this.useAccountHandler}>
        <ProfilePicture src={profile.images.length ? profile.images[0].url : 'https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383'} roundedCircle />
        <Name>{profile.display_name}</Name>
        <DeleteAccount onClick={this.deleteAccountHandler}>x</DeleteAccount>
      </StoredUserContainer>
    );
  };
}

export default withRouter(StoredUser);
