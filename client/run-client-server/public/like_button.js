'use strict';

const { createElement } = React;

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
    this.state = {
      time: this.currentTime()
    }
  }

  render() {
    return `Sample Data: ${this.state.time}`;

    // return createElement(
    //   'button',
    //   { onClick: () => this.setState({ liked: !this.state.true }) },
    //   'Like'
    // );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: this.currentTime() }), 1000)
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  currentTime() {
    return new Date().toLocaleTimeString();
  };
}











const domContainer = document.querySelector('#like_button_container');
const clock = createElement(Clock);
ReactDOM.render(clock, domContainer);
// // const ourComponent = ReactDOM.render(<LikeButton ref={(likeButton) => {window.likeButton = likeButton}}/>, domContainer);
// ReactDOM.render(<Page ref={(ourComponent) => { window.ourComponent = ourComponent }} />, document.getElementById("app"));

// console.log('like button', window.likeButton);
// // console.log('like button', ));
// window.likeButton.setState({ liked: true })
// // likeButton.render();