'use strict';

const { createElement } = React;

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    // this.interval = null;
    this.state = {
      name: 'Batman'
    }
  }

  changeName() {
    this.setState({
      name: 'Bruce'
    })
  }

  render() {
    return createElement(
      'div',
      {},
      this.state.name
    );
  }

  // componentDidMount() {
  //   // this.interval = setInterval(() => this.setState({ time: this.currentTime() }), 1000)
  // }

  // componentWillUnMount() {
  //   clearInterval(this.interval);
  // }

  // currentTime() {
  //   return new Date().toLocaleTimeString();
  // };
}











// const domContainer = document.querySelector('#video_player_container');
const videoPlayer = createElement(VideoPlayer);
// ReactDOM.render(videoPlayer, domContainer);
// // const ourComponent = ReactDOM.render(<LikeButton ref={(likeButton) => {window.likeButton = likeButton}}/>, domContainer);
// ReactDOM.render(<Page ref={(ourComponent) => { window.ourComponent = ourComponent }} />, document.getElementById("app"));

// console.log('like button', window.likeButton);
// // console.log('like button', ));
// window.likeButton.setState({ liked: true })
// // likeButton.render();