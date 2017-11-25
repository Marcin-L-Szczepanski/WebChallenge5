"use strict";

const logo = document.querySelector(".intro__pic");
logo.setAttribute("src", "img/panther_min-min.jpg");
logo.classList.add("intro__pic--loading");

logo.addEventListener("load", function(event) {
  
logo.setAttribute("src", "img/panther.jpg");
logo.classList.remove("intro__pic--loading");
});