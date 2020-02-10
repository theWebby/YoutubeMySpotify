var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const playerReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '800',
        width: '1600',
        videoId: 'D7npse9n-Yw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {

}

function skipAtEndOfVideo(seconds){
    if(!playerLoaded()){
        return
    }
    
    console.log('player', player)
    console.log('duration', player.getDuration())
    console.log('current time', player.getCurrentTime())
    if (player.getPlayerState() != 1){
        return
    }

    if (player.getDuration() - player.getCurrentTime() < seconds){
        spotifyApi.skip()
    }
}

function playerLoaded(){
    return typeof player.loadVideoById == 'function'
}

function updatePlayer(id){
    if (playerLoaded()){
        if(id){
            console.log('Loading video:', id);
            player.loadVideoById(id, 0);
        }
    }
    else{
        setTimeout(() => updatePlayer(id), 10)
    }
}