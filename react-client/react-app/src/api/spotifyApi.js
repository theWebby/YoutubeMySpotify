import request from "./request"


export default class SpotifyApi {
    constructor(accessToken, refreshToken){
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    async _makeRequest(url, method, accessToken){
        try{
            return await request(url, method, accessToken);
        }
        catch (e) {
            if (e.status === 401){
                this.accessToken = (await this.getNewAccessToken(this.refreshToken)).access_token;
                return request(url, method, this.accessToken);
            }

            throw e
        }
    }

    get(url){
        return this._makeRequest(url, 'GET', this.accessToken);
    }

    getCurrentlyPlaying(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/currently-playing', 'GET', this.accessToken);
    }

    pause(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/pause', 'PUT', this.accessToken)
    }

    skip(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/next', 'POST', this.accessToken);
    }

    
    prev(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/previous', 'POST', this.accessToken);
    }

    seek(ms){
        return this._makeRequest(`https://api.spotify.com/v1/me/player/seek?position_ms=${ms}`, 'PUT', this.accessToken);
    }

    play(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/play', 'PUT', this.accessToken);
    }

    getProfile(){
        return this._makeRequest('https://api.spotify.com/v1/me', 'GET', this.accessToken)
    }

    getTopTracks(){
        return this._makeRequest('https://api.spotify.com/v1/me/top/tracks?limit=50', 'GET', this.accessToken)
    }

    getNewAccessToken(refreshToken){
        return request(`https://youtubemyspotify.uk/refresh_token?refresh_token=${this.refreshToken}`, 'GET');
    }
}