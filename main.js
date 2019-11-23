var closeIcon = document.querySelector(".close-icon");
var greeting = document.querySelector(".welcome-message");
var clipboardIcon = document.querySelector(".btn-icon");

greeting.addEventListener("click", removeBanner);
clipboardIcon.addEventListener("click", switchLightBorder);

function removeBanner() {
  greeting.remove();
}
