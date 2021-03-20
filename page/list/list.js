var vid = document.getElementById("list_video");
var isPlaying = false;

function playPause() {
  var change = document.getElementById("playpause");
  if (isPlaying) {
    vid.pause();
    change.innerHTML = "▶";
  } else {
    vid.play();
    change.innerHTML = "| |";
  }
  isPlaying = !isPlaying;
}