document.addEventListener("scroll", function() {
  "use strict";
  const gotop_btn = document.querySelector("#go-top");
  let scroll_position = window.pageYOffset;
  
  if(scroll_position > 200) {
    gotop_btn.classList.add("go-top--showing");
  }
  else {
    gotop_btn.classList.remove("go-top--showing");
  }
}, false);