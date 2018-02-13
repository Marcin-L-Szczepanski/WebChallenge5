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
  btnLeft.innerHTML = '<svg width="40px" height="40px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/></svg>';
  btnRight.innerHTML = '<svg width="40px" height="40px" viewBox="0 0 30 80" xml:space="preserve"><polyline fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/></svg>';
  btnLeft.classList.add("opinion__button", "opinion__button--left");
  btnRight.classList.add("opinion__button", "opinion__button--right");
  const box = document.querySelector(".siema");
  box.appendChild(btnLeft);
  box.appendChild(btnRight);
  btnLeft.addEventListener('click', () => mySiema.prev());
  btnRight.addEventListener('click', () => mySiema.next());
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