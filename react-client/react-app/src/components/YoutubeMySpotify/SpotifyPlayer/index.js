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
      lastSong: '',
      topTracks: [],
      playingContext: '',
    }

    this.youtubePlayerState = -1;
    this.mounted = false;

    const { accessToken, refreshToken } = props
    this.spotifyApi = new SpotifyApi(accessToken, refreshToken)
  }

  async componentDidMount() {
    await this.getTopTracks();
    this.mounted = true;

    this.update();
  }


  componentWillUnmount(){
    this.mounted = false;
    console.log('unmounting')
  }


  update = async () => {
    while(this.mounted){
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

  async getTopTracks(){
    this.setState({topTracks: (await this.spotifyApi.getTopTracks()).items})
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

    if (lastSongId !== currentlyPlayingId) {
        this.setState({lastSongId: currentlyPlayingId})
        return true;
    }

    return false;
  }

  async getNextTopTrack(){
    let [nextTopTrack, ...restTopTracks] = this.state.topTracks;
    
    if(!restTopTracks.length){
      await this.getTopTracks();
    }
    
    this.setState({topTracks: restTopTracks})
    return nextTopTrack;
  }

  updatePlayingContext = (context) => {
    this.props.onPlayingContextChange(context)
    this.setState({playingContext: context})
  }

  async getPlayingContextFromCurrentlyPlaying(currentlyPlaying){
    const context = currentlyPlaying.context
      ? (await this.spotifyApi.get(currentlyPlaying.context.href)).name
      : 'Search Results'

    this.updatePlayingContext(context);
  }

  playNextFromTop50 = async () => {
    const { spotifyPlayer } = this.state;  
    spotifyPlayer.currentlyPlaying.item = await this.getNextTopTrack();
    this.setState({
      spotifyPlayer
    })
    this.updatePlayingContext('Your Top 50 Tracks');
  }

  getCurrentlyPlaying = async () => {
    const { spotifyPlayer } = this.state;  
    let currentlyPlaying = (await this.spotifyApi.getCurrentlyPlaying()) || {};
    
    if (!Object.keys(currentlyPlaying).length){
      if(this.youtubePlayerState === 0 || this.youtubePlayerState === -1){
        this.playNextFromTop50();
      }
    }
    else{
      spotifyPlayer.currentlyPlaying = currentlyPlaying;
      this.setState({
        spotifyPlayer
      })
      await this.getPlayingContextFromCurrentlyPlaying(currentlyPlaying);
    }
  }

  render = () => {
    return (
      <div>
        <SpotifyControlPanel {...this.state.spotifyPlayer} spotifyApi={this.spotifyApi} playingContext={this.state.playingContext} playNextFromTop50={this.playNextFromTop50}></SpotifyControlPanel>
      </div>
    );
  };
}

export default SpotifyPlayer;
