var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const playerReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'dPI-mRFEIH0',
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

function playerLoaded(){
    return typeof player.loadVideoById == 'function'
}

function updatePlayer(id){
    console.log('id', id);

    if (playerLoaded()){
        player.loadVideoById(id, 0);
    }
    else{
        setTimeout(updatePlayer, 10)
    }
}