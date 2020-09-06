import React from "react";
import { RoundedButton, ControlPanelContainer, Info, MarqueeContainer } from './styled'
import { IoMdPlay, IoMdPause, IoIosSkipForward, IoIosSkipBackward } from 'react-icons/io';
import Marquee from "react-smooth-marquee"

class SpotifyControlPanel extends React.Component {
  constructor(props) {
    super();
  }

  onSkip(){
    if(this.props.playingContext === 'Your Top 50 Tracks'){
      this.props.playNextFromTop50();
      return;
    }

    this.props.spotifyApi.skip().catch(e => {console.log(e)});
  }

  onPrev(){
    this.props.spotifyApi.prev().catch(e => {console.log(e)});
  }

  renderControlPanel() {
    const { currentlyPlaying } = this.props

    //TODO: The play button should say if the video is playing not spotify
    return (
      <div>
        <RoundedButton variant='secondary' onClick={() => this.onPrev()}><IoIosSkipBackward /></RoundedButton>
        <RoundedButton variant='secondary' onClick={() => this.onSkip()}><IoIosSkipForward /></RoundedButton>
      </div>
    )
  }

  renderInfoPanel() {
    const { currentlyPlaying } = this.props

    if (!Object.keys(currentlyPlaying).length) {
      return <div>Nothing is currently playing</div>
    }

    return( 
      <div>
        <div><Info>{currentlyPlaying.item.name}</Info> | <Info>{currentlyPlaying.item.album.name}</Info></div>
        <MarqueeContainer>
          <Marquee velocity={0.025}>{currentlyPlaying.item.artists.map((artist, index, array) => artist.name + (index === array.length-1 ? '' : ', '))}</Marquee>
        </MarqueeContainer>
      </div>
    )
  }

  render = () => {
    return (
      <ControlPanelContainer>
        <div className={this.props.className}>
          {this.renderInfoPanel()}
          {this.renderControlPanel()}
        </div>
      </ControlPanelContainer>
    );
  };
}

export default SpotifyControlPanel;
