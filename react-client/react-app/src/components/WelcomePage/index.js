import React from "react";
import { withRouter } from 'react-router-dom'
import phoneWithSignal from '../../images/SpotifyOnPhoneSignal.png'
import logoOnScreen from '../../images/LogoOnScreen.png'
import { Container, PhoneWithSignal, LogoOnScreen, Heading, Text, Button } from './styled'
import { addNewAccountRedirect } from "../AccountManager/helpers";


class WelcomePage extends React.Component {
  constructor(props) {
    super();
    console.log(props)
  }

  onClickHere = () => {
    if(this.props.currentUser){
      return this.props.history.push("/YoutubeMySpotify");
    }
    
    if(this.props.users.length){
      return this.props.history.push("/AccountManager");
    }

    addNewAccountRedirect();
  }

  render = () => {
    return (
      <Container>
        <PhoneWithSignal src={phoneWithSignal}></PhoneWithSignal>
        <Heading>Youtube My Spotify</Heading>
        <LogoOnScreen src={logoOnScreen}></LogoOnScreen>
        <Text>Open Spotify on your phone.</Text>
        <Text>Put music on.</Text>
        <Text>Mute your phone.</Text>
        <Button onClick={() => this.onClickHere()}>Click here.</Button>
      </Container>
    );
  };
}

export default withRouter(WelcomePage);
