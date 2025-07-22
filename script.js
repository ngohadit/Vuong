const playlist = [
  { name: "Bài 1 - Ngôi Nhà Hoa Hồng", url: "https://media.vocaroo.com/mp3/16cxaqpVQIn3" },
  { name: "Bài 2 - Tuyết Yêu Thương", url: "https://media.vocaroo.com/mp3/1ngyIDcwIyXY" }
];
let currentIndex = 0;
const audio = document.getElementById("bg-music");
const source = document.getElementById("audio-source");
const playBtn = document.querySelector(".music-btn");
const songTitle = document.getElementById("song-title");

function updateTrack() {
  source.src = playlist[currentIndex].url;
  audio.load();
  audio.play();
  playBtn.textContent = "Tạm dừng nhạc";
  songTitle.textContent = `🎵 Đang phát: ${playlist[currentIndex].name}`;
}

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Tạm dừng nhạc";
  } else {
    audio.pause();
    playBtn.textContent = "Phát nhạc";
  }
}

function nextTrack() {
  currentIndex = (currentIndex + 1) % playlist.length;
  updateTrack();
}

document.body.addEventListener('click', function autoPlayOnce() {
  updateTrack();
  document.body.removeEventListener('click', autoPlayOnce);
});
audio.addEventListener("ended", nextTrack);

const fpsElement = document.querySelector(".fps");
function updateFPS() {
  const fps = (Math.random() * (144.9 - 59.8) + 59.8).toFixed(1);
  fpsElement.textContent = `FPS: ${fps}`;
}
setInterval(updateFPS, 300);
