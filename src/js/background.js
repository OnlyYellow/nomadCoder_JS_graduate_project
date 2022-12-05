const videos = ["0.mp4", "1.mp4", "2.mp4"];
const chosenVideo = videos[Math.floor(Math.random() * videos.length)];
const section = document.querySelector("section");
const bgVideo = document.createElement("video");

bgVideo.src = `/src/video/${chosenVideo}`;
bgVideo.autoplay = true;
bgVideo.muted = true;
bgVideo.loop = true;
section.appendChild(bgVideo);