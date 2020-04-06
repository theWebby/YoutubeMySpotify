import React from "react";
import SpotifyApi from '../../../api/spotifyApi'
import request from '../../../api/request'
import { timeout } from '../helpers'
import SpotifyControlPanel from './SpotifyControlPanel'

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
    while(true){
      try{
        await this.getCurrentlyPlaying();
        
        const { spotifyPlayer: { currentlyPlaying }} = this.state;
  
        if(Object.keys(currentlyPlaying).length !== 0){
          await this.updateYoutubePlayer(currentlyPlaying)
          await this.pauseSpotifyIfNearEnd(currentlyPlaying)
        }
    
        await this.skipWhenVideoEnds();
    
      }
      catch (e) { console.log('e', e) }
  
      await timeout(UPDATE_CURRENTLY_PLAYING_INTERVAL_MS);
    }
  }

  skipWhenVideoEnds = async () => {
    if(this.youtubePlayerState === 0){
      await this.spotifyApi.skip();
    }
  }

  updateYoutubePlayerState = (event) => {
    this.youtubePlayerState = event.data;
  }

  pauseSpotifyIfNearEnd = async (currentlyPlaying) => {
    const { is_playing, progress_ms, item } = currentlyPlaying

    if (!is_playing) {
      return;
    }

    if (item.duration_ms - progress_ms < END_OF_SONG_BUFFER_MS) {
        this.spotifyApi.seek(progress_ms - 15000);
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

    return await request('https://youtubemyspotify.uk/getVideoId', 'POST', '', {songName, artistName})
  }

  isCurrentlyPlayingNew = (currentlyPlaying) => {
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
        <SpotifyControlPanel {...this.state.spotifyPlayer} spotifyApi={this.spotifyApi}></SpotifyControlPanel>
      </div>
    );
  };
}

export default SpotifyPlayer;
