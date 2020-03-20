import React from "react";
import { HeaderContainer, HeaderText } from "./styled";
import DropdownButton from "../DropdownButton"

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
        href: '/AccountManager',
        text: 'Account Manager'
      }
    )

    return items;
  }

  render = () => {
    return (
      <HeaderContainer>
        <HeaderText onClick={() => window.location = '/'}>Youtube My Spotify</HeaderText>
        <DropdownButton {...this.generateDropDownProps()}></DropdownButton>
      </HeaderContainer>
    );
  };
}

export default Header;
