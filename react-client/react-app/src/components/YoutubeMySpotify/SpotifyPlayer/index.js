import React from "react";
import SpotifyApi from '../../../api/spotifyApi'
import request from '../../../api/request'
import { timeout } from '../helpers'

const UPDATE_CURRENTLY_PLAYING_INTERVAL_MS = 1500;
const END_OF_SONG_BUFFER_MS = 15000


class SpotifyPlayer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      spotifyPlayer: {
        currentlyPlaying: {
          
        }
      },
      lastSong: ''
    }

    this.youtubePlayerState = -1;

    const { accessToken, refreshToken } = props
    this.spotifyApi = new SpotifyApi(accessToken, refreshToken)
  }
  
  async componentDidMount() {
    this.update();
  }

  update = async () => {
    try{
      await this.getCurrentlyPlaying();
      
      const { spotifyPlayer: { currentlyPlaying }} = this.state;
      
      if(currentlyPlaying){
        await this.updateYoutubePlayer(currentlyPlaying)
        await this.pauseSpotifyIfNearEnd(currentlyPlaying)
      }
  
      await this.skipWhenVideoEnds();
  
      await timeout(UPDATE_CURRENTLY_PLAYING_INTERVAL_MS);
    }
    catch(e){
      console.log('e', e)
    }
    finally{
      this.update(); 
    }
  }

  skipWhenVideoEnds = async () => {
    console.log(this.youtubePlayerState);
    if(this.youtubePlayerState === 0){
      await this.spotifyApi.skip();
    }
  }

  updateYoutubePlayerState = (event) => {
    this.youtubePlayerState = event.data;
  }

  pauseSpotifyIfNearEnd = async (currentlyPlaying) => {
    if (!currentlyPlaying.is_playing) {
      return;
    }

    if (currentlyPlaying.item.duration_ms - currentlyPlaying.progress_ms < END_OF_SONG_BUFFER_MS) {
        this.spotifyApi.pause();
    }
  }

  updateYoutubePlayer = async (currentlyPlaying) => {
    if (this.isCurrentlyPlayingNew(currentlyPlaying)){
      const youtubeVideoId = await this.getVideoIdFromCurrentlyPlaying(currentlyPlaying);
      this.props.updateYoutubePlayer(youtubeVideoId)
      await this.waitForPlayerToPlay();
    }
  }

  waitForPlayerToPlay = async () => {
    if(this.youtubePlayerState !== 1){
      await timeout(50);
      await this.waitForPlayerToPlay();
    }
  }

  getVideoIdFromCurrentlyPlaying = async (currentlyPlaying) => {
    const songName = currentlyPlaying.item.name;
    const artistName = currentlyPlaying.item.artists[0].name;

    console.log(songName, artistName);

    const result = await request('http://localhost:3000/getVideoId', 'POST', undefined, {
      songName,
      artistName
    });

    console.log(result)

    return result.videoId;
}

  isCurrentlyPlayingNew = (currentlyPlaying) => {
    if (currentlyPlaying === {}) {
        return false;
    }

    const { lastSongId } = this.state;
    const { item: { id: currentlyPlayingId }} = currentlyPlaying;

    if (lastSongId != currentlyPlayingId) {
        this.setState({lastSongId: currentlyPlayingId})
        return true;
    }

    return false;
}

  getCurrentlyPlaying = async () => {
    const { spotifyPlayer } = this.state;  
    const currentlyPlaying = (await this.spotifyApi.getCurrentlyPlaying()) || {};
    
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

export default SpotifyPlayer;
