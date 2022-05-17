function getM3U8() {
    return jwplayer().getPlaylist()[0].sources[0].file;
}

document.querySelector("div.vod_download").onclick = () => alert(jwplayer().getPlaylist()[0].sources[0].file);
