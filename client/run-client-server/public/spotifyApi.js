const spotifyApi = {
    getCurrentlyPlaying(){
        return request('https://api.spotify.com/v1/me/player/currently-playing')
    }, 

    pause(){

    }
}