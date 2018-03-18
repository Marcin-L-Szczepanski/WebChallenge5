const showHideButton = document.createElement("button");
const menuList = document.querySelector("#menu__list");
const body = document.querySelector("body");

(function createMenuButton() {
  "use strict";
  const menu = document.querySelector("#menu");
  const menuBtnSvg = '<svg id="svg" class="button__svg button__svg--menu-closed" width="35" height="30"><line class="line" x1="3" y1="3" x2="31" y2="3"/><line class="line" x1="3" y1="15" x2="31" y2="15"/><line class="line" x1="3" y1="27" x2="31" y2="27"/></svg>';
  showHideButton.innerHTML = menuBtnSvg;
  showHideButton.classList.add("menu__button", "button", "button--menu");
  showHideButton.setAttribute("type", "button");
  showHideButton.setAttribute("aria-controls", "menu__list")
  menu.insertBefore(showHideButton, menu.firstElementChild);
  }());

function hideMenu () {
  showHideButton.setAttribute("aria-expanded", "false");
  showHideButton.classList.remove("menu__button--open");
  menuList.classList.add("menu__list--hidden");
}

function showMenu () {
  showHideButton.setAttribute("aria-expanded", "true");
  showHideButton.classList.add("menu__button--open");
  menuList.classList.remove("menu__list--hidden");
}

showHideButton.addEventListener("click", function() {
  svg.classList.toggle("button__svg--menu-open");
  svg.classList.toggle("button__svg--menu-closed");
  if (menuList.classList.contains("menu__list--hidden")) {
    showMenu();
  } else {
    hideMenu();
  }
}, hideMenu());

window.addEventListener("click", function(e){	
  if (menuList.contains(e.target)){
    svg.classList.remove("button__svg--menu-open");
    svg.classList.add("button__svg--menu-closed");
    hideMenu();
  }
});