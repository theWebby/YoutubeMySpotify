import React from 'react';
import YoutubePlayer from './components/YoutubePlayer.js';

class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      isTrue: true
    };
    this.player = React.createRef();
  }

  someFunction = () => {
    this.player.current.loadVideoById("gpStPNAB7Cw")
  }

  render() {
    return (
      <YoutubePlayer
        ref={this.player}
        id="2g811Eo7K8U"
      />
    );
  };
}

export default App;
