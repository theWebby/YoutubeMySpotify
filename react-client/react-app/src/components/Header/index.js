import React from "react";
import { HeaderContainer, HeaderText } from "./styled";
import DropdownButton from "./DropdownButton"
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super();
  }

  generateDropDownProps(){
    return {
      variant: 'secondary',
      text: 'Account',
      items: this.generateItemsArrayFromUsers()
    }
  }

  generateItemsArrayFromUsers(){
    const items = this.props.users.map(user => {
      return {
        href: '/',
        text: user.profile.display_name
      } 
    })

    items.push({}) //divider
    items.push({
        onclick: () => {
          this.props.history.push("/AccountManager");
        },
        text: 'Account Manager'
      }
    )

    return items;
  }

  render = () => {
    return (
      <HeaderContainer>
        <HeaderText onClick={() => window.location = '/YoutubeMySpotify'}>Youtube My Spotify</HeaderText>
        <DropdownButton variant={'btn-link'} {...this.generateDropDownProps()}></DropdownButton>
      </HeaderContainer>
    );
  };
}

export default withRouter(Header);
