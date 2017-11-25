"use strict";

const logo = document.querySelector(".intro__pic");
logo.src = "img/panther_min-min.jpg";
logo.classList.add("intro__pic--loading");

function loaded() {
  logo.src = "img/panther.jpg";
  logo.classList.remove("intro__pic--loading");
}

if (logo.complete) {
  loaded()
} else {
  logo.addEventListener('load', loaded)
  logo.addEventListener('error', function() {
      alert('error')
  })
}