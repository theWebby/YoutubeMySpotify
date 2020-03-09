import React from "react";
import { HeaderContainer, HeaderText } from "./styled";
import DropdownButton from "../DropdownButton"

class Header extends React.Component {
  constructor(props) {
    super();
    this.dropdownprops = {
      variant: 'secondary',
      text: 'Account',
      items: [{href: './',
          text: 'Account 1'},
      ]
    }
  }

  render = () => {
    return (
      <HeaderContainer>
        <HeaderText>Youtube My Spotify</HeaderText>
        <DropdownButton {...this.dropdownprops}></DropdownButton>
      </HeaderContainer>
    );
  };
}

export default Header;
