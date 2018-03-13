document.addEventListener("scroll", function() {
  "use strict";
  const gotopButton = document.querySelector("#go-top");
  let scrollPosition = window.pageYOffset;
  
  if(scrollPosition > 200) {
    gotopButton.classList.remove("button--hidden");
  }
  else {
    gotopButton.classList.add("button--hidden");
  }
}, false);