const params = (new URL(document.location)).searchParams;
const refreshToken = params.get("refresh_token");
let accessToken = params.get("access_token");

const REFRESH_INTERVAL = 500;

async function getVideoIdFromCurrentlyPlaying(currentlyPlaying) {
    const songName = currentlyPlaying.item.name;
    const artistName = currentlyPlaying.item.artists[0].name;

    const videoId = await request(`http://localhost:3000/getVideoId`, "POST", {
        songName,
        artistName
    });

    return videoId.videoId
}

var currentSongId = '';
function isCurrentlyPlayingNew(currentlyPlaying) {
    if (!currentlyPlaying) {
        return false;
    }

    if (currentSongId != currentlyPlaying.item.id) {
        currentSongId = currentlyPlaying.item.id
        return true;
    }

    return false;
}

async function getCurrentlyPlaying() {
    const currentlyPlaying = await spotifyApi.getCurrentlyPlaying()
    const isNew = isCurrentlyPlayingNew(currentlyPlaying)

    return {
        currentlyPlaying,
        isNew
    }
}

const END_OF_SONG_BUFFER_MS = 3000;
async function pauseSpotifyIfNearEnd(currentlyPlaying) {
    if (!currentlyPlaying.is_playing) {
        return;
    }

    if (currentlyPlaying.item.duration_ms - currentlyPlaying.progress_ms < END_OF_SONG_BUFFER_MS) {
        console.log(currentlyPlaying);
        spotifyApi.pause();
    }
}

async function main() {
    try {
        const { currentlyPlaying, isNew } = await getCurrentlyPlaying().catch(async e => {
            if (e.status == 401) {
                console.log("WOW, you've been here a while. Requesting a new Access token.")
                const { accessToken: newAccessToken } = await spotifyApi.getNewAccessToken(refreshToken);
                accessToken = newAccessToken;
            }
        });

        if (currentlyPlaying) {

            if (isNew) {
                const youtubeVideoId = await getVideoIdFromCurrentlyPlaying(currentlyPlaying);
                updatePlayer(youtubeVideoId)
            }

            pauseSpotifyIfNearEnd(currentlyPlaying);
        }

        await skipAtEndOfVideo(2)
        setTimeout(main, REFRESH_INTERVAL)
    }
    catch (e) {
        console.log(e)
        setTimeout(main, REFRESH_INTERVAL);
    }

}

main()