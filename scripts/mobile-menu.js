const mobileButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector("header");

mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    header.classList.add("black");
    document.body.style.overflowY = "hidden"
  } else {
    header.classList.remove("black");
    document.body.style.overflowY = "auto"
  }
});
