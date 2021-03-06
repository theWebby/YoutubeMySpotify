import request from "./request";
import { SERVER_URL } from "../constants";

export default class SpotifyApi {
  constructor(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  async _makeRequest(url, method, accessToken) {
    try {
      return await request(url, method, accessToken);
    } catch (e) {
      if (e.status === 401) {
        this.accessToken = (
          await this.getNewAccessToken(this.refreshToken)
        ).access_token;
        return request(url, method, this.accessToken);
      }

      throw e;
    }
  }

  async getPlaylist(playlistUrl) {
    const recommendedString = ":recommended";
    let sanitisedPlaylistUrl = playlistUrl;
    let isRecommended = false;

    if (playlistUrl.includes(recommendedString)) {
      sanitisedPlaylistUrl = playlistUrl.replace(recommendedString, ""); //Recommended songs has :recommended at the end of the url - probably should deal with this better.
      isRecommended = true;
    }

    const playlistData = await this.get(sanitisedPlaylistUrl);
    playlistData.isRecommended = isRecommended;
    return playlistData;
  }

  get(url) {
    return this._makeRequest(url, "GET", this.accessToken);
  }

  getCurrentlyPlaying() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me/player/currently-playing",
      "GET",
      this.accessToken
    );
  }

  play() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me/player/play",
      "PUT",
      this.accessToken
    );
  }

  pause() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me/player/pause",
      "PUT",
      this.accessToken
    );
  }

  skip() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me/player/next",
      "POST",
      this.accessToken
    );
  }

  prev() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me/player/previous",
      "POST",
      this.accessToken
    );
  }

  seek(ms) {
    return this._makeRequest(
      `https://api.spotify.com/v1/me/player/seek?position_ms=${ms}`,
      "PUT",
      this.accessToken
    );
  }

  getProfile() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me",
      "GET",
      this.accessToken
    );
  }

  getTopTracks() {
    return this._makeRequest(
      "https://api.spotify.com/v1/me/top/tracks?limit=50",
      "GET",
      this.accessToken
    );
  }

  getNewAccessToken(refreshToken) {
    return request(
      `${SERVER_URL}refresh_token?refresh_token=${this.refreshToken}`,
      "GET"
    );
  }
}
