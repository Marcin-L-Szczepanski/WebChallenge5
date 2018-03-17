const showHideButton = document.createElement("button");
const menuList = document.querySelector("#menu__list");
const body = document.querySelector("body");

(function createMenuButton() {
  "use strict";
  const menu = document.querySelector("#menu");
  
  showHideButton.innerHTML = "Menu";
  showHideButton.classList.add("menu__button", "button", "button--side", "button--menu");
  showHideButton.setAttribute("type", "button");
  showHideButton.setAttribute("aria-controls", "menu__list")
  menu.insertBefore(showHideButton, menu.firstElementChild);
  menuList.classList.add("menu__list--top");
  }());

function hideShowMenuButton () {
  let scrollPosition = window.pageYOffset;
  if (scrollPosition > 200) { 
    showHideButton.classList.remove("button--hidden");
    showHideButton.classList.add("button--menu-bottom"); 
  } else if (window.pageYOffset <= 100 ) { 
    showHideButton.classList.remove("button--hidden"); 
    showHideButton.classList.remove("button--menu-bottom");
    menuList.classList.add("menu__list--top"); 
  } else {
    showHideButton.classList.add("button--hidden");
//    showHideButton.classList.remove("button--top");
    menuList.classList.remove("menu__list--top"); 
  }
}

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

document.addEventListener("scroll", function() {
    if (!showHideButton.classList.contains("menu__button--open")) {
      hideShowMenuButton();
    }
});

showHideButton.addEventListener("click", function() {
  if (menuList.classList.contains("menu__list--hidden")) {
    showMenu();
  } else {
    hideMenu();
  }
}, hideMenu());

window.addEventListener("click", function(e){	
  if (menuList.contains(e.target)){
    hideMenu();
  }
});