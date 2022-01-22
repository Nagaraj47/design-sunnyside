let menuBtn = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
