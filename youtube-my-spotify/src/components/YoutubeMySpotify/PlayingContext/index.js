import React from "react";
import { Text } from './styled'

class PlayingContext extends React.Component {
  constructor(props) {
    super();
    this.state = {
      playingContext: ''
    }
  }

  updatePlayingContext(context){
    this.setState({playingContext: context})
  }

  render = () => {
    return (
      <Text>Playing from: {this.state.playingContext}</Text>
    );
  };
}

export default PlayingContext;
