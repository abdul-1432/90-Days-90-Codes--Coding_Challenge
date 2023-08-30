let animationTimer = null;
let duration = getComputedStyle(document.documentElement).getPropertyValue(
  "--animation-duration"
);
duration = parseInt(duration, 10);
let hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
}

const onJump = (e) => {
  if (!hasTouchScreen && e.keyCode != 32) return;

  document.body.classList.add("animate");
  document.getElementById("text").classList.add("stop");
  animationTimer = setTimeout(() => {
    document.body.classList.remove("animate");
    animationTimer && clearTimeout(animationTimer);
  }, duration);
};

document.addEventListener("touchend", onJump);
document.onkeyup = onJump;
