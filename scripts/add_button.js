window.addEventListener("load", function (event) {
    let vod_header = document.body.querySelector("#vod_header");
    let vod_download = document.createElement("div")
    vod_download.innerText = "M3U8";
    vod_download.className = "vod_download";
    
    vod_header.insertBefore(vod_download, vod_header.querySelector("h1"));

    let download = document.createElement('script')
    download.src = chrome.runtime.getURL('scripts/download.js')
    document.body.appendChild(download)
});