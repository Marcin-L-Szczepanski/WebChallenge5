(function () {
  "use strict";
  const menu = document.querySelector("#menu");
  const showHideButton = document.createElement("button");
  const menuList = document.querySelector(".menu__list");
  
  showHideButton.innerHTML = "Menu";
  showHideButton.classList.add("button", "button--large");
  showHideButton.setAttribute("type", "button");
  showHideButton.setAttribute("aria-controls", "menu__list")
  menu.insertBefore(showHideButton, menu.firstElementChild);
  
  return { showHideButton };
  }());

function hideMenu () {
  showHideButton;
}

function showMenu () {
  
}