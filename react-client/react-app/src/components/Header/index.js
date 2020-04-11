import React from "react";
import { HeaderContainer, HeaderText } from "./styled";
import DropdownButton from "./DropdownButton"
import { withRouter } from 'react-router-dom'
import { IoIosPerson } from 'react-icons/io'
import { setCurrentUser, loadCurrentUser } from '../AccountManager/helpers'

class Header extends React.Component {
  constructor(props) {
    super();
  }

  generateDropDownProps() {
    return {
      variant: 'secondary',
      text: 'Account',
      items: this.generateItemsArrayFromUsers()
    }
  }

  generateItemsArrayFromUsers() {
    const currentUser = loadCurrentUser();

    const items = this.props.users.map(user => {
      return {
        onclick: () => {
          setCurrentUser(user);
          this.props.history.push("/YoutubeMySpotify");
        },
        text: user.profile.display_name,
        isCurrentUser: user.profile.id === currentUser.profile.id,
      }
    })

    if (this.props.users.length) {
      items.push({}) //divider
    }

    items.push({
      onclick: () => {
        this.props.history.push("/AccountManager");
      },
      text: 'Account Manager'
    }
    )

    return items;
  }

  isCurrentUser(user){

  }

  render = () => {
    return (
      <HeaderContainer>
        <HeaderText onClick={() => window.location = '/YoutubeMySpotify'}>Youtube My Spotify</HeaderText>
        <DropdownButton variant={'primary'} {...this.generateDropDownProps()}>
          <IoIosPerson className="mr-1" style={{ fontSize: '20px' }}></IoIosPerson>Account
        </DropdownButton>
      </HeaderContainer>
    );
  };
}

export default withRouter(Header);
