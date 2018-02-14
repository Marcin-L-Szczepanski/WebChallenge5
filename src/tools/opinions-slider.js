"use strict";

const mySiema = new Siema({
  loop: true,
  onInit: createSliderControlers,
  onChange: printSlideIndex,
});

function createSliderControlers() {
  createButtons();
  createIndex();
  printSlideIndex();
}

function createButtons() {
  const btnLeft = document.createElement('button');
  const btnRight = document.createElement('button');
  btnLeft.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 60 80" xml:space="preserve"><polyline fill="none" stroke="#000000" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" points="45,65 5,38 45,15 "/></svg>';
  btnRight.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 40 80" xml:space="preserve"><polyline fill="none" stroke="#000000" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" points="0,15 45,38 0,65 "/></svg>';
  btnLeft.classList.add("opinion__button", "opinion__button--left");
  btnRight.classList.add("opinion__button", "opinion__button--right");
  const box = document.querySelector(".siema");
  box.appendChild(btnLeft);
  box.appendChild(btnRight);
  btnLeft.addEventListener('click', function () {
    return mySiema.prev();
  });
  btnRight.addEventListener('click', function () {
    return mySiema.next();
  });
//  btnLeft.addEventListener('click', () => mySiema.prev());
//  btnRight.addEventListener('click', () => mySiema.next());
}

function createIndex() {
  const slideIndex = document.createElement('p');
  slideIndex.classList.add("js-index");
  const span = document.createElement('span');
  const box = document.querySelector(".siema");
  box.appendChild(slideIndex);
  document.querySelector('.js-index').innerHTML = this.currentSlide
}

function printSlideIndex() {
  document.querySelector('.js-index').innerHTML = this.currentSlide
}