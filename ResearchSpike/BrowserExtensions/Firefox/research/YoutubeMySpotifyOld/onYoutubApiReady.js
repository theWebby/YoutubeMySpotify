var player, currentVideoUrl = "";
function onYouTubeIframeAPIReady() {              
    player = new YT.Player('player', {
        allowFullScreen:true,    
        height: '390',
        width: '640',
        videoId : '0',
        playerVars : {
            //controls: 0,
            //'enablejsapi' : 1,
            'wmode' : 'opaque',
            'origin' : 'moz-extension://e600c625-27b9-40ed-9cf8-44bd60dec9dd',
            //'rel' : 0
        },                 
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onError
        }      
    });
}        

function onError(e){
    console.log(e)
}

function onPlayerReady(event) {      

}       
function onPlayerStateChange(event) {   
    // if (event.data == YT.PlayerState.ENDED) {   
    // player.loadVideoById ('');
    // }       
}
