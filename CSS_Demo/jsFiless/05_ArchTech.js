const moveTop = document.getElementsByClassName("top")[0];
window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 400) {
    moveTop.classList.add("active");
  } else {
    moveTop.classList.remove("active");
  }
});
