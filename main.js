var closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", removeBanner);

function removeBanner(event) {
  if (event.target.classList.contains("close-icon")) {
    event.target.parentElement.remove();
  }
}
