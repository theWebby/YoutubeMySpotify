import React from 'react';

class YoutubePlayer extends React.Component {
  constructor(props){
    super()
  }

  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded

    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else { // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  loadVideo = () => {
    const { id } = this.props;

    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      },
    });
  };

  onPlayerStateChange = (event) => {
    this.props.onPlayerStateChange(event);
  }


  onPlayerReady = event => {
    this.player = event.target;
  };

  loadVideoById(id){
    this.player.loadVideoById(id, 0);
  }

  isPlayerReady(){
    console.log(this.player.loadVideoById)
    return (!!this.player.loadVideoById);
  }

  render = () => {
    const { id } = this.props;
    return (
      <div>
        <div id={`youtube-player-${id}`} />
      </div>
    );
  };
}

export default YoutubePlayer;
