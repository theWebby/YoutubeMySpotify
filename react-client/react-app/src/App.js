import React from 'react';
import YoutubePlayer from './components/YoutubePlayer.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      isTrue: true
    };
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YoutubePlayer
        id="2g811Eo7K8U"
      />
    );
  };
}

export default App;
