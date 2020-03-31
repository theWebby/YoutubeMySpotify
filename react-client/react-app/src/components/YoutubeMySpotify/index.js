import React from "react";
import YoutubePlayer from './YoutubePlayer'
import SpotifyPlayer from './SpotifyPlayer'
import { timeout } from './helpers'

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
      <div>
        <YoutubePlayer ref={this.YoutubePlayer} onPlayerStateChange={this.onYoutubePlayerStateChange} id="iAtomM7ybOM" />
        <SpotifyPlayer {...this.props} ref={this.SpotifyPlayer} updateYoutubePlayer={this.updateYoutubePlayer}></SpotifyPlayer>
      </div>
    );
  };
}

export default YoutubeMySpotify;
