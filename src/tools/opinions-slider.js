"use strict";

const mySiema = new Siema({
  loop: true,
  startIndex: 0,
  onChange: printSlideIndex
});

function printSlideIndex() {
  let sliderIndexDot = document.querySelectorAll(".slider__dot");
  for (let i = 0; i < sliderIndexDot.length; i++) {
    sliderIndexDot[i].classList.remove("slider__dot--active");
  }
  let currentSlideDot = document.getElementById("slide"+this.currentSlide);
  currentSlideDot.classList.add("slider__dot--active");
}

//let boundIndex = printSlideIndex.bind(mySiema);

createButtons();
createIndex();


function createIndex(printSlideIndex) {
  const indexDots = document.createElement('div');
  indexDots.classList.add("slider__dots");
  for (let i = 0; i < mySiema.innerElements.length; i++) {
    const indexDot = document.createElement('div');
    indexDot.classList.add("slider__dot");
    indexDot.setAttribute("id", "slide"+i);
    indexDot.addEventListener('click', function () {
      console.log(i);
      return mySiema.goTo(i);
    });
    indexDots.appendChild(indexDot);
    if (i === 0) indexDot.classList.add("slider__dot--active");
  };
  //boundIndex();
  const opinionsWrapper = document.querySelector(".opinions-wrapper");
  opinionsWrapper.appendChild(indexDots);
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

