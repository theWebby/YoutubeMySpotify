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

    getCurrentlyPlaying(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/currently-playing', 'GET', this.accessToken);
    }

    pause(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/pause', 'PUT', this.accessToken)
    }

    skip(){
        return this._makeRequest('https://api.spotify.com/v1/me/player/next', 'POST', this.accessToken);
    }

    getProfile(){
        return this._makeRequest('https://api.spotify.com/v1/me', 'GET', this.accessToken)
    }

    getNewAccessToken(refreshToken){
        return request(`http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/refresh_token?refresh_token=${this.refreshToken}`, 'GET');
    }
}