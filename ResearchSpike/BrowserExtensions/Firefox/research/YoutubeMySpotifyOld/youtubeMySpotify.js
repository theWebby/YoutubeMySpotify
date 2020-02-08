// var access_token = spotifyTools.creds.access_token,
//         refresh_token = spotifyTools.creds.refresh_token


// var lastSongId;
// function getCurrentSong(){
//     $.ajax({
//     url: 'https://api.spotify.com/v1/me/player/currently-playing',
//     headers: {
//         'Authorization': 'Bearer ' + access_token
//     },
//     success: function(response) {
//         // console.log(response)

//         if (response.item.id == lastSongId){
//             if (nearEndOfSong(response)){
//                 pauseSpotify()
//             }
//             return;
//         }
        
//         lastSongId = response.item.id;
//         var artistNames = "";
//         for (var i = 0; i<response.item.artists.length;i++){
//             artistNames = artistNames + response.item.artists[i].name
//             if (i < response.item.artists.length - 1){
//                 artistNames = artistNames + " "
//             }
//         }
//         getCurrentVideo(response.item.name, response.item.album.name, artistNames, response.item.duration_ms, response.progress_ms);
//     }   
// });
// }

// function controlSpotify(control, callback){
//     $.ajax({
//         url: '/spotify_controls/' + control,
//         headers: {
//             'Authorization': 'Bearer ' + access_token
//         },
//         success: function(response) {
//             callback(response)
//         }
//     });
// }

// function pauseSpotify(){
//     console.log("PAUSE")
//     controlSpotify('pause', () => {})
// }

// function nextSpotify(){
//     console.log("NEXT")
//     var lastId = Object.assign({}, lastSongId)
//     controlSpotify('next', () => {})
//     setTimeout(() => {
//         if (lastId == lastSongId){
//             console.log("NEXT FAILED WTF SPOTIFY")
//             nextSpotify();
//         }
//     }, 300)
// }

// function playSpotify(){
//     controlSpotify('play', () => {})
// }

// function nearEndOfSong(song){
//     var timeRemaining = song.item.duration_ms - song.progress_ms
//     if (timeRemaining < (10 * 1000)){
//         return true
//     }
//     return false
// }

// function endOfVideo(){
//     // var playerVideoId = player.getVideoUrl().replace(/https:\/\/www.youtube.com\/watch\?(t=[1-9]+&)*v=/, '');
//     // var currentVideoId = currentVideoUrl.replace(/https:\/\/www.youtube.com\/watch\?(t=[1-9]+&)*v=/, '');
//     if (!player.getVideoUrl){
//         //player object not instanciated
//         return
//     }

//     var playerVideoId = player.getVideoUrl().split('=').pop();
//     var currentVideoId = currentVideoUrl.split('=').pop();
    
//     //verifies that the player has loaded the next video before checking if it is the end.
//     if (playerVideoId != currentVideoId){
//         if (playerVideoId != "https://www.youtube.com/watch"){
//             console.log("current video id", currentVideoId)
//             console.log("player video id", playerVideoId)
//             // console.log("Player Not Loaded the next video! Cant be end of video, so don't skip")
//             return false;   
//         }
//     }
//     if (player.getDuration() == 0){
//         console.log("Player not loaded, no duration")
//         return false
//     }
//     var timeRemaining = player.getDuration() - player.getCurrentTime()
//     if (timeRemaining < 3){
//         console.log("END")
//         currentVideoUrl = "";
//         return true
//     }
//     return false
// }

// function updatePlayer(newId, startAt, retries){        
//     try{
//         player.loadVideoById(newId);
//         setTimeout(() => {
//             currentVideoUrl = player.getVideoUrl();
//         }, 3000)
//     }
//     catch(e){
//         console.log(e)
//         if (retries == 0){
//             location.reload();
//         }
//         else{
//             setTimeout(() => {
//                 updatePlayer(newId, startAt, retries - 1)
//             }, 500)
//         }
//     }
// }

// function getCurrentVideo(songName, albumName, artistName, songDuration, songProgress){
//     console.log("Finding video for ", albumName, ': ', songName, '(dur.', songDuration, '@', songProgress, ')')
//     $.ajax({
//         url: '/getVideoId',
//         type: 'POST',
//         dataType: 'json',
//         contentType: 'application/x-www-form-urlencoded',
//         data: {
//             'songName': songName,
//             'albumName': albumName,
//             'artistName': artistName,
//             'songDuration': songDuration,
//             'songProgress': songProgress,
//         },
//         success: function(response) {
//             console.log('videoIdres,', response.videoId)
//             // nextVideoId = response.videoId;
//             updatePlayer(response.videoId, Math.round(songProgress / 1000), 5)
//         }   
//     });

//     updateAccessToken();
// }

// function updateAccessToken(){
//     const refresh_token_url = '/refresh_token?refresh_token=' + refresh_token;
//     $.ajax({
//         url: refresh_token_url,
//         success: function(response) {
//             access_token = response.access_token
//             console.log("access", access_token)
//         }
//     });
// }