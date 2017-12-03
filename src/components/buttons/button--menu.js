const showHideButton = document.createElement("button");
const menuList = document.querySelector("#menu__list");

(function createMenuButton() {
  "use strict";
  const menu = document.querySelector("#menu");
  
  showHideButton.innerHTML = "Menu";
  showHideButton.classList.add("menu__button", "button");
  showHideButton.setAttribute("type", "button");
  showHideButton.setAttribute("aria-controls", "menu__list")
  menu.insertBefore(showHideButton, menu.firstElementChild);
  }());

function hideMenu () {
  showHideButton.setAttribute("aria-expanded", "false");
  menuList.classList.add("menu__list--hidden");
}

function showMenu () {
  showHideButton.setAttribute("aria-expanded", "true");
  menuList.classList.remove("menu__list--hidden");
}

showHideButton.addEventListener("click", function() {
  if (menuList.classList.contains("menu__list--hidden")) {
    showMenu();
  } else {
    hideMenu();
  }
}, hideMenu());