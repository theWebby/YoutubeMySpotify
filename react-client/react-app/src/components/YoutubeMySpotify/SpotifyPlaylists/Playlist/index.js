import React from "react";

class SpotifyPlaylists extends React.Component {
  constructor(props) {
    super();
  }

  render = () => {
    const { className } = this.props;
    console.log(className)
    
    return (
      <div className={className}>
        some cool playlist 
      </div>
    );
  };
}

export default SpotifyPlaylists;
