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

async function skipAtEndOfVideo(seconds){
    if(!playerLoaded()){
        return
    }

    const playerState = player.getPlayerState();
    if (playerState == 0){
        //player state remains 0 for a second while the new video is loaded. The below skip is not affected because when the video ends the play head is moved to the start.
        await setTimeout(spotifyApi.skip(), 3000);
    }
    
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