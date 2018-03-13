document.addEventListener("scroll", function() {
  "use strict";
  const gotopButton = document.querySelector("#go-top");
  let scrollPosition = window.pageYOffset;
  
  if(scrollPosition > 200) {
    gotopButton.classList.add("go-top--showing");
  }
  else {
    gotopButton.classList.remove("go-top--showing");
  }
}, false);