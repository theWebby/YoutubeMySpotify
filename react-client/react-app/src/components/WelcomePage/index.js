import React from "react";
import { withRouter } from 'react-router-dom'
import phoneWithSignal from '../../images/SpotifyOnPhoneSignal.png'
import logoOnScreen from '../../images/LogoOnScreen.png'
import { PhoneWithSignal, LogoOnScreen, Heading, Button } from './styled'
import { Container, Row, Col } from 'react-bootstrap'
import FadeInText from './FadeInText/index'
import {IoIosLogIn} from 'react-icons/io'

class WelcomePage extends React.Component {
  constructor(props) {
    super();
    console.log(props)

    this.state = {
      showFirst: false,
      showSecond: false,
      showThird: false
    }

    setTimeout(() => {
      this.state.showFirst = true;
    }, 300);
    setTimeout(() => {
      this.state.showSecond = true;
    }, 600);
    setTimeout(() => {
      this.state.showThird = true;
    }, 900);
  }

  onClickHere = () => {
    if (this.props.currentUser) {
      return this.props.history.push("/YoutubeMySpotify");
    }

    // if(this.props.users.length){
    return this.props.history.push("/AccountManager");
    // }

    // this.props.history.push("/");
  }

  render = () => {
    return (
      <Container fluid>
        <Row>
          <Col className="text-center">
            <Heading>Youtube My Spotify</Heading>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="text-center">
              <LogoOnScreen className="w-75" src={logoOnScreen}></LogoOnScreen>
            </div>
          </Col>
          <Col md="6" className="mt-4">
            <Row>
              <Col md="12">
                <FadeInText delay={0}>Open Spotify on your phone.</FadeInText>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 11, offset: 1 }}>
                <FadeInText delay={1000}>Put music on.</FadeInText>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 10, offset: 2 }}>
                <FadeInText delay={2000}>Mute your phone.</FadeInText>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 9, offset: 3 }}>
                <FadeInText delay={3000}>
                  <Button size="lg" variant="secondary" className="ml-5 font-" onClick={() => this.onClickHere()}>
                    <span className="mr-2">Get Started</span>
                    <IoIosLogIn 
                    style={{fontSize: '35px'}}
                    ></IoIosLogIn>
                </Button>
                </FadeInText>
              </Col>
            </Row>
            <PhoneWithSignal className="d-flex align-self-end" src={phoneWithSignal}></PhoneWithSignal>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default withRouter(WelcomePage);
