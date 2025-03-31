// TOGGLE BUTTON

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu")
  const hamburger = document.getElementById("hamburger")

  const toggleMenu = () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
  }

  hamburger.addEventListener("click", toggleMenu)
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.addEventListener("click", toggleMenu))
})
