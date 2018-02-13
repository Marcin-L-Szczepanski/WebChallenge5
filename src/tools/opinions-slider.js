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
  btnLeft.appendChild(document.createTextNode('Left'));
  btnRight.appendChild(document.createTextNode('Right'));
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