import React from "react";
import { AccountSummaryContainer, StyledImage as Image, Name, Info, InfoContainer } from "./styled"
import request from "../../../api/request";

class AccountSummary extends React.Component {
  constructor(props) {
    super();
  }

  render = () => {
    const { profile } = this.props

    return (
      <AccountSummaryContainer>
         <iframe style={{display: 'none'}} src="https://spotify.com/logout"></iframe> 

        <Image src={profile.images.length ? profile.images[0].url : 'https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383'} roundedCircle />
        <Name>{profile.display_name}</Name>
        <InfoContainer>
          <Info>{profile.followers.total} followers</Info> | <Info>{profile.product === 'premium' ? 'Premium' : 'Free Account'}</Info>
        </InfoContainer>
      </AccountSummaryContainer>
    );
  };
}

export default AccountSummary;
