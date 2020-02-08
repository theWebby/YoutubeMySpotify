const params = (new URL(document.location)).searchParams;
const accessToken = params.get("access_token");
const refreshToken = params.get("refresh_token");

const REFRESH_INTERVAL = 500;

async function getVideoIdFromCurrentlyPlaying(currentlyPlaying){
    console.log(currentlyPlaying)

    const songName = currentlyPlaying.item.name;
    const artistName = currentlyPlaying.item.artists[0].name;
    
    const videoId = await request(`http://localhost:3000/getVideoId`, "POST", {
        songName,
        artistName
    });

    console.log(videoId.videoId)
    return videoId
}

var currentSongId = '';
function isCurrentlyPlayingNew(currentlyPlaying){
    if(currentSongId != currentlyPlaying.item.id){
        currentSongId = currentlyPlaying.item.id
        console.log(true)
        return true;
    }

    return false;
}

async function getCurrentlyPlaying(){
    const currentlyPlaying = await spotifyApi.getCurrentlyPlaying();
    const isNew = isCurrentlyPlayingNew(currentlyPlaying)

    return{
        currentlyPlaying,
        isNew
    }
}

async function main(){
    const currentlyPlaying = await getCurrentlyPlaying()
    if(currentlyPlaying.isNew){
        console.log('update Playere')
        const youtubeVideoId = await getVideoIdFromCurrentlyPlaying(currentlyPlaying.currentlyPlaying);
        updatePlayer(youtubeVideoId)
    }
    
    setTimeout(main, REFRESH_INTERVAL)
    // await setTimeout(await main(), REFRESH_INTERVAL)
}

main()