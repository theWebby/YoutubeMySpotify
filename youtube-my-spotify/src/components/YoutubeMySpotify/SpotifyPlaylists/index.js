import React from "react";
import { Container, StyledPlaylist as Playlist } from './styled'

class SpotifyPlaylists extends React.Component {
  constructor(props) {
    super();
  }

  render = () => {
    return (
      <Container>
        <Playlist className='hello'/>
        <Playlist className='hello'/>
        <Playlist className='hello'/>
      </Container>
    );
  };
}

export default SpotifyPlaylists;
