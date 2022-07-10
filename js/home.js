/*Some code sourced and edited accordingly from:

Conor Bailey - JavaScript: Create a Device Friendly Product Slider With Progress Bar - https://www.youtube.com/watch?v=LPBGK1gqXoU */

//For Home Associates Slider

const slider = document.querySelector(".slider-inner");
const progressBar = document.querySelector(".prog-bar-inner");

let sliderGrabbed = false;

slider.parentElement.addEventListener("scroll", (e) => {
  progressBar.style.width = `${getScrollPercentage()}%`;
});

slider.addEventListener("mousedown", (e) => {
  sliderGrabbed = true;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", (e) => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", (e) => {
  sliderGrabbed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});

slider.addEventListener("wheel", (e) => {
  e.preventDefault();
  slider.parentElement.scrollLeft += e.deltaY;
});

function getScrollPercentage() {
  return (slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100;
}
