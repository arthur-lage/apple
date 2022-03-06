const cartButton = document.querySelector(".shopping-cart-button");
const cartDropdown = document.querySelector(".dropdown");

cartButton.addEventListener("click", () => {
  cartDropdown.classList.toggle("active");
});