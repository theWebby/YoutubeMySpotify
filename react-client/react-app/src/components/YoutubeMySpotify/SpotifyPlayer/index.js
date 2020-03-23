import React from "react";
import SpotifyApi from '../../../api/spotifyApi'

class YoutubeMySpotify extends React.Component {
  constructor(props) {
    super();
    this.state = {
      spotifyPlayer: {
        currentlyPlaying: {
          
        }
      }
    }

    const { accessToken, refreshToken } = props
    this.spotifyApi = new SpotifyApi(accessToken, refreshToken)
  }
  
  async componentDidMount() {
    this.startApp();
  }

  startApp = async () => {
    await this.getCurrentlyPlaying();

    const { spotifyPlayer: { currentlyPlaying }} = this.state;

    console.log('currently Playinh', currentlyPlaying);
  }

  getCurrentlyPlaying = async () => {
    const currentlyPlaying = await this.spotifyApi.getCurrentlyPlaying();

    const { spotifyPlayer } = this.state;
    spotifyPlayer.currentlyPlaying = currentlyPlaying;

    this.setState({
      spotifyPlayer
    })
  }

  render = () => {
    return (
      <div>
        <div>{JSON.stringify(this.state.spotifyPlayer.currentlyPlaying)}</div>
      </div>
    );
  };
}

export default YoutubeMySpotify;
