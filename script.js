document.addEventListener("mousemove", function (e) {
  const star = document.createElement("div");
  star.className = "trail-star";
  star.textContent = "★";
  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";
  document.body.appendChild(star);

  setTimeout(function () {
    star.remove();
  }, 800);
});