import React from "react";
import { AccountSummaryContainer, StyledImage as Image, Name, Info, InfoContainer } from "./styled"
import request from "../../../api/request";
import defaultUserImgPath from '../../../images/user.png'

class AccountSummary extends React.Component {
  constructor(props) {
    super();
  }

  render = () => {
    const { profile } = this.props

    return (
      <AccountSummaryContainer>
        <iframe style={{display: 'none'}} src="https://spotify.com/logout"></iframe> 

        <Image src={profile.images.length ? profile.images[0].url : defaultUserImgPath } roundedCircle />
        <Name>{profile.display_name}</Name>
        <InfoContainer>
          <Info>{profile.followers.total} followers</Info> | <Info>{profile.product === 'premium' ? 'Premium' : 'Free Account'}</Info>
        </InfoContainer>
      </AccountSummaryContainer>
    );
  };
}

export default AccountSummary;
