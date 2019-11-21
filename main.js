var closeIcon = document.querySelector(".close-icon");
var greeting = document.querySelector(".welcome-message");

greeting.addEventListener("click", removeBanner);

function removeBanner() {
  greeting.remove();
}
