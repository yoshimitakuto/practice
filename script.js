const burger = document.querySelector(".burger");
const nav = document.querySelector(".navber");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});