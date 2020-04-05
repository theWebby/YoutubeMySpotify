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

    const result = await request('https://youtubemyspotify.uk/getVideoId', 'POST', '', {songName, artistName})

    // this.getVideoId(songName, artistName, (result) => {
      console.log(result)
    // })

    return result.videoId;
  }

  
  // getVideoId = (songName, artistName, callback) => {
  //   var q = songName + ' ' + artistName + ' music video';
  //   console.log('q:', q)
  //   q = q.replace(/[^a-zA-Z1-9 ]+/g, "")
       
  //   this.getTopResult(q, callback)
  // }

  // getTopResult = async (q, callback) => {
  //   var url = "https://www.youtube.com/results?search_query=" + q;
  //   var result = "boPyHl3iptQ"
    
  //   console.log('result')
  //   result = await request(url, 'GET');
  //   console.log(result)

  //   //     function(error, response, body) {
  //   //         var txt = body;
            
  //   //         var re1='.*';	// Non-greedy match on filler
  //   //         var re2='((https://i.ytimg.com/vi/)[a-zA-Z0-9-_]+)';	// Alphanum 1
            
  //   //         var p = new RegExp(re2,["i"]);
  //   //         var m = p.exec(txt);
  //   //         if (m != null)
  //   //         {
  //   //             var alphanum1=m[1].replace(m[2], '');
  //   //             var result = (alphanum1);
  //   //         }
            
  //   //         console.log('result', result)
  //   //         callback(result)
  //   //     }
  //   // );
  // }


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
        <div>{JSON.stringify(this.state.spotifyPlayer.currentlyPlaying)}</div>
      </div>
    );
  };
}

export default SpotifyPlayer;
