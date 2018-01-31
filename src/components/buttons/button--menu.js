const showHideButton = document.createElement("button");
const menuList = document.querySelector("#menu__list");
let currentPosition = 0;

(function createMenuButton() {
  "use strict";
  const menu = document.querySelector("#menu");
  
  showHideButton.innerHTML = "Menu";
  showHideButton.classList.add("menu__button", "menu__button--hidden", "button");
  showHideButton.setAttribute("type", "button");
  showHideButton.setAttribute("aria-controls", "menu__list")
  menu.insertBefore(showHideButton, menu.firstElementChild);
  }());

function hideShowMenuButton () {
  if (currentPosition > window.pageYOffset) { 
    showHideButton.classList.remove("menu__button--hidden"); 
  } else {
    showHideButton.classList.add("menu__button--hidden");
  }
  currentPosition = window.pageYOffset;
}

function hideMenu () {
  showHideButton.setAttribute("aria-expanded", "false");
  menuList.classList.add("menu__list--hidden");
}

function showMenu () {
  showHideButton.setAttribute("aria-expanded", "true");
  menuList.classList.remove("menu__list--hidden");
}

document.addEventListener("scroll", function() {
    hideShowMenuButton();
});

showHideButton.addEventListener("click", function() {
  if (menuList.classList.contains("menu__list--hidden")) {
    showMenu();
  } else {
    hideMenu();
  }
}, hideMenu());