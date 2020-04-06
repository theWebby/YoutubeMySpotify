import React from "react";
import { StyledYoutubePlayer as YoutubePlayer } from './styled'
import SpotifyPlayer from './SpotifyPlayer'
import { timeout } from './helpers'
import SpotifyPlaylists from './SpotifyPlaylists'
import { Container } from './styled'

class YoutubeMySpotify extends React.Component {
  constructor(props) {
    super();
    this.YoutubePlayer = React.createRef();
    this.SpotifyPlayer = React.createRef();
  }

  updateYoutubePlayer = async (id) => {
    try{
      this.YoutubePlayer.current.loadVideoById(id);
    }
    catch(e){
      await timeout(10);
      this.updateYoutubePlayer(id);
    }
  }

  onYoutubePlayerStateChange = (event) => {
    this.SpotifyPlayer.current.updateYoutubePlayerState(event);
  }

  render = () => {
    return (
      <Container>
        <YoutubePlayer className='someclassname' ref={this.YoutubePlayer} onPlayerStateChange={this.onYoutubePlayerStateChange} id="iAtomM7ybOM" />
        {/* <YoutubePlayer ref={this.player} id="iAtomM7ybOM" /> */}
        <SpotifyPlayer {...this.props} ref={this.SpotifyPlayer} updateYoutubePlayer={this.updateYoutubePlayer}></SpotifyPlayer>
        {/* <SpotifyPlayer {...this.props}></SpotifyPlayer> */}
        <hr style={{width: '95%'}}/>
        <SpotifyPlaylists />
      </Container>
    );
  };
}

export default YoutubeMySpotify;
