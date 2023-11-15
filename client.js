// Set the TV image dynamically based on the iframe size
function setTvSize() {
  return;
  const tv = document.getElementById("tv");
  const video = document.getElementsByTagName("iframe")[0];
  const videoWidth = video.clientWidth;
  const videoHeight = video.clientHeight;

  tv.style.width = `${videoWidth}px`;
  tv.style.height = `${videoHeight}px`;
}

// Update the TV size when the window is resized
window.addEventListener("resize", setTvSize);

// Set the initial TV size
setTvSize();

function toggleFullscreen() {
  const iframe = document.getElementsByTagName("iframe")[0];
  iframe.classList.toggle("full");
  if (iframe.src.includes("lichess")) {
    // reload and resize chess iframe
    iframe.src = iframe.src;
  }
  console.log(iframe);
}
