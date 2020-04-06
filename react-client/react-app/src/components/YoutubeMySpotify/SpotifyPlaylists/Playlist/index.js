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
      </div>
    );
  };
}

export default SpotifyPlaylists;
