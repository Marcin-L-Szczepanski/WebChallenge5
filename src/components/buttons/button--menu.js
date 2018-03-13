const showHideButton = document.createElement("button");
const menuList = document.querySelector("#menu__list");
let scrollPosition = 0;

(function createMenuButton() {
  "use strict";
  const menu = document.querySelector("#menu");
  
  showHideButton.innerHTML = "Menu";
  showHideButton.classList.add("menu__button", "button", "button--side", "button--menu", "button--top");
  showHideButton.setAttribute("type", "button");
  showHideButton.setAttribute("aria-controls", "menu__list")
  menu.insertBefore(showHideButton, menu.firstElementChild);
  }());

function hideShowMenuButton () {
  if (window.pageYOffset <= 100 ) { 
    showHideButton.classList.remove("button--hidden"); 
    showHideButton.classList.add("button--top");
    menuList.classList.add("menu__list--top"); 
  }
  else if (scrollPosition > 200) { 
    showHideButton.classList.remove("button--top");
    showHideButton.classList.remove("button--hidden"); 
  } else {
    showHideButton.classList.remove("button--top");
    showHideButton.classList.add("button--hidden");
    menuList.classList.remove("menu__list--top"); 
  }
  scrollPosition = window.pageYOffset;
}

function hideMenu () {
  showHideButton.setAttribute("aria-expanded", "false");
  showHideButton.classList.remove("menu__button--open");
  menuList.classList.add("menu__list--hidden", "menu__list--top");
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