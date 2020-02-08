//Runs on youtube domain

function clearYoutube() {
    console.log('starting')

    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
    // document.documentElement.innerHTML = '';
    console.log('done')
}

function startYoutubeMySpotify() {
    var csp = document.createElement('meta');
    csp.setAttribute('http-equiv', 'Content-Security-Policy');
    csp.content = "default-src 'self' 'unsafe-inline'"
    document.getElementsByTagName('head')[0].appendChild(csp);


    console.log('starting')
    var playerObject = document.createElement('div');
    playerObject.id = "player";
    document.body.appendChild(playerObject);

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.getElementsByTagName('head')[0].appendChild(tag);
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    

}

var player;

function onYouTubeIframeAPIReady() {
    console.log('doing something')
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

// if (confirm("Wanna youtube your spotify?")) {
    // window.onload = function(){
        clearYoutube();
        startYoutubeMySpotify();
    // }
// }