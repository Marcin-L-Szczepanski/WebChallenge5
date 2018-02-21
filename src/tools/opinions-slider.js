"use strict";

const mySiema = new Siema({
  loop: true,
  startIndex: 0,
  onChange: printSlideIndex
});

function printSlideIndex() {
  const sliderIndexDot = document.querySelectorAll(".slider__dot");
  for (let i = 0; i < sliderIndexDot.length; i++) {
    sliderIndexDot[i].classList.remove("slider__dot--active");
  }
  const currentSlideDot = document.getElementById("slide"+this.currentSlide);
  currentSlideDot.classList.add("slider__dot--active");
}

createButtons();
createIndex();

function createIndex() {
  const sliderIndexDots = document.createElement('div');
  sliderIndexDots.classList.add("slider__dots");
  for (let i = 0; i < mySiema.innerElements.length; i++) {
    const sliderIndexDot = document.createElement('div');
    sliderIndexDot.classList.add("slider__dot");
    sliderIndexDot.setAttribute("id", "slide"+i);
    sliderIndexDot.addEventListener('click', function () {
      return mySiema.goTo(i);
    });
    sliderIndexDots.appendChild(sliderIndexDot);
    if (i === 0) sliderIndexDot.classList.add("slider__dot--active");
  };
  const opinionsWrapper = document.querySelector(".opinions-wrapper");
  opinionsWrapper.appendChild(sliderIndexDots);
}


function createButtons() {
  const btnLeft = document.createElement('button');
  const btnRight = document.createElement('button');
  btnLeft.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 60 80" xml:space="preserve"><polyline class="slider__button-arrow" points="45,65 5,38 45,15 "/></svg>';
  btnRight.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 40 80" xml:space="preserve"><polyline class="slider__button-arrow" points="0,15 45,38 0,65 "/></svg>';
  btnLeft.classList.add("slider__button", "slider__button--left");
  btnRight.classList.add("slider__button", "slider__button--right");
  const box = document.querySelector(".siema");
  box.appendChild(btnLeft);
  box.appendChild(btnRight);
  btnLeft.addEventListener('click', function () {
    return mySiema.prev();
  });
  btnRight.addEventListener('click', function () {
    return mySiema.next();
  });
}

