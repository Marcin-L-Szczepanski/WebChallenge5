"use strict";

const mySiema = new Siema({
  loop: true,
  startIndex: 0,
  onChange: printSlideIndex
});

function printSlideIndex() {
  document.querySelector('.js-index').innerHTML = this.currentSlide;
}

let boundIndex = printSlideIndex.bind(mySiema);

createButtons();
createIndex();

function createIndex() {
  const slideIndex = document.createElement('p');
  slideIndex.classList.add("js-index");
  const span = document.createElement('span');
  const box = document.querySelector(".siema");
  box.appendChild(slideIndex);
  boundIndex();
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
