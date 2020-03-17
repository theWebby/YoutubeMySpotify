import React from "react";
import { AccountSummaryContainer, StyledImage as Image, Name, Info, InfoContainer } from "./styled"

class AccountSummary extends React.Component {
  constructor(props) {
    super();
  }

  render = () => {
    const { profile } = this.props

    return (
      <AccountSummaryContainer>
        <Image src={profile.images[0].url} roundedCircle />
        <Name>{profile.display_name}</Name>
        <InfoContainer>
          <Info>{profile.followers.total} followers</Info> | <Info>{profile.product === 'premium' ? 'Premium' : 'Free Account'}</Info>
        </InfoContainer>
      </AccountSummaryContainer>
    );
  };
}

export default AccountSummary;
