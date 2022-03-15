const cartButtons = document.querySelectorAll(".shopping-cart-button");
const cartDropdowns = document.querySelectorAll(".dropdown");
const searchOverlay = document.querySelector(".search-overlay");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (screen.width < 834) {
      searchOverlay.classList.toggle("active");

      if (searchOverlay.classList.contains("active")) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }

    cartDropdowns.forEach((dropdown) => {
      dropdown.classList.toggle("active");
    });
  });
});
