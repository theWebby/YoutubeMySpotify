const spotifyApi = {
    getCurrentlyPlaying(){
        return request('https://api.spotify.com/v1/me/player/currently-playing')
    }, 

    pause(){
        return request('https://api.spotify.com/v1/me/player/pause', 'PUT')
    },

    skip(){
        return request('https://api.spotify.com/v1/me/player/next', 'POST');
    },

    getNewAccessToken(refreshToken){
        return request(`http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/refresh_token?refresh_token=${refreshToken}`)
    }
}