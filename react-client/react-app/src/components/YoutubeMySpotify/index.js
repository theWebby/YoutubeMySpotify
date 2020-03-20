import React from "react";
import YoutubePlayer from './YoutubePlayer'
import SpotifyPlayer from './SpotifyPlayer'

class YoutubeMySpotify extends React.Component {
  constructor(props) {
    super();
    this.player = React.createRef(); 
  }

  render = () => {
    return (
      <div>
        <YoutubePlayer ref={this.player} id="iAtomM7ybOM" />
        <SpotifyPlayer {...this.props}></SpotifyPlayer>
      </div>
    );
  };
}

export default YoutubeMySpotify;
