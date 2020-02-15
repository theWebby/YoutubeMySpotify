import VideoPlayer from './components/YoutubeMySpotifyVideoPlayer.js'
const { createElement } = React;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.videoPlayerElement = React.createRef()
    this.videoPlayer = createElement(VideoPlayer, {
      ref: this.videoPlayerElement,
    });
    this.changeNameButton = createElement('button', {
      onClick: this.handleNameChange
    }, 'Click Me')
  }

  handleNameChange = name => {
    this.videoPlayerElement.current.changeName();
  }


  render() {
    return createElement(
      'div',
      { className: 'App' },
      [this.videoPlayer, this.changeNameButton]
    );
  }

}

const domContainer = document.querySelector('#video_player_container');
const app = createElement(App);
ReactDOM.render(app, domContainer);

// // myChild.js
// import React, { Component } from 'react'

// class MyChild extends Component {

//   handleInputChange = event => {
//     this.props.onNameChange(event.target.value)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handleInputChange} value={this.props.name} />
//         <div>The name is: {this.props.name}</div>
//       </div>
//     )
//   }

// }

// export default MyChild