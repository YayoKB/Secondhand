//For Gallery Lightbox

const lightboxEnabled = document.querySelectorAll(".lightbox-enabled");
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxBtns = document.querySelectorAll("lightbox-btn");
const lightboxBtnRight = document.querySelector("#right");
const lightboxBtnLeft = document.querySelector("#left");
let activeImage;
const imageDescription = document.querySelector(".description");

const showLightbox = () => {
  lightboxContainer.classList.add("active");
};

const hideLightbox = () => {
  lightboxContainer.classList.remove("active");
};

const setActiveImage = (image) => {
  lightboxImage.src = image.dataset.imgsrc;
  imageDescription.innerHTML = image.dataset.desc;
  activeImage = lightboxArray.indexOf(image);
  switch (activeImage) {
    case 0:
      console.log("Apple");
      lightboxBtnLeft.classList.add("inactive");
      break;
    case lastImage:
      console.log("Banana");
      lightboxBtnRight.classList.add("inactive");
      break;
    default:
      console.log("Dog");
      lightboxBtnRight.classList.remove("inactive");
      lightboxBtnLeft.classList.remove("inactive");
  }
};

const removeBtnAnimation = () => {
  lightboxBtnLeft.blur();

  lightboxBtnRight.blur();
};

const transitionSlidesLeft = () => {
  lightboxBtnLeft.focus();
  activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[activeImage].previousElementSibling);
  removeBtnAnimation();
};

const transitionSlidesRight = () => {
  lightboxBtnRight.focus();
  activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[activeImage].nextElementSibling);
  removeBtnAnimation();
};

const transitionSlideHandler = (moveItem) => {
  moveItem.includes("left") ? transitionSlidesLeft() : transitionSlidesRight();
};

lightboxEnabled.forEach((image) => {
  image.addEventListener("click", (e) => {
    showLightbox();
    setActiveImage(image);
  });
});

lightboxContainer.addEventListener("click", () => {
  console.log("container clicked");
  hideLightbox();
});

lightboxBtnLeft.addEventListener("click", (e) => {
  e.stopPropagation();
  transitionSlideHandler(e.currentTarget.id);
});

lightboxBtnRight.addEventListener("click", (e) => {
  e.stopPropagation();
  transitionSlideHandler(e.currentTarget.id);
});
