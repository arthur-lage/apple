const searchSection = document.querySelector(".search-section");
const searchButton = document.querySelector("#search-button");
const navList = document.querySelector("header nav ul");
const closeSearchButton = document.querySelector("#close-search");
const searchInput = document.querySelector("#search");
const overlay = document.querySelector(".search-overlay")

searchInput.value = "";

searchButton.addEventListener("click", () => {
  searchSection.classList.add("active");
  navList.classList.add("hidden");
  overlay.classList.add("active");
  document.body.style.overflowY = "hidden";
});

closeSearchButton.addEventListener("click", () => {
  searchSection.classList.remove("active");
  navList.classList.remove("hidden");
  overlay.classList.remove("active");
  searchInput.value = "";
  document.body.style.overflowY = "auto";
});
