function getM3U8() {
    return jwplayer().getPlaylist()[0].sources[0].file
}

window.onload = () => {
    let vod_header = document.body.querySelector("#vod_header");
}
