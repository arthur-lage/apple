const iphone13Image = document.querySelector("#iphone-13-image");
const carnivalImg = document.querySelector("#bts-image");

function LoadImages() {
  if (screen.width < 600) {
    iphone13Image.src =
      "https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small.jpg";
  }

  if (screen.width > 600) {
    iphone13Image.src =
      "https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_medium.jpg";
  }

  if (screen.width < 600) {
    carnivalImg.src =
      "https://www.apple.com/br/home/heroes/back-to-school-last-chance/images/hero_bts__bcuslanw39xe_small.jpg";
  }

  if (screen.width > 600) {
    carnivalImg.src =
      "https://www.apple.com/br/home/heroes/back-to-school-last-chance/images/hero_bts__bcuslanw39xe_medium.jpg";
  }
}

window.addEventListener("load", LoadImages);

window.addEventListener("resize", LoadImages);
