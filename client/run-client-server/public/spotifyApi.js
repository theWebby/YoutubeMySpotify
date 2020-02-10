const spotifyApi = {
    getCurrentlyPlaying(){
        return request('https://api.spotify.com/v1/me/player/currently-playing')
    }, 

    pause(){
        return request('https://api.spotify.com/v1/me/player/pause', 'PUT')
    },

    skip(){
        return request('https://api.spotify.com/v1/me/player/next', 'POST');
    }
}