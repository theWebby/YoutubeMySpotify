import request from "./request"

export default class SpotifyApi {
    constructor(accessToken, refreshToken){
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    getCurrentlyPlaying(){
        return request('https://api.spotify.com/v1/me/player/currently-playing', 'GET', this.accessToken)
    }

    pause(){
        return request('https://api.spotify.com/v1/me/player/pause', 'PUT', this.accessToken)
    }

    skip(){
        return request('https://api.spotify.com/v1/me/player/next', 'POST', this.accessToken);
    }

    getProfile(){
        return request('https://api.spotify.com/v1/me', 'GET', this.accessToken)
    }

    getNewAccessToken(refreshToken){
        return request(`http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/refresh_token?refresh_token=${this.refreshToken}`)
    }
}