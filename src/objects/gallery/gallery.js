let link = document.querySelectorAll(".gallery__category");
  link.forEach(function (element, index, array) {
    element.addEventListener("click", function() {
      for(let i = 0; i < link.length; i++) {
          link[i].classList.add("gallery__category--inactive");
      }
      element.classList.remove("gallery__category--inactive");
      
      let postcard = document.querySelectorAll(".postcard");
      if(element.id == "categoryPrint") {
          for(let i = 0; i < postcard.length; i++) {
            if(postcard[i].classList.contains("web")) {
              postcard[i].style.display = "none";
            }
            else {
              postcard[i].style.display = "block";
            }
          }
      }
      else if(element.id == "categoryWeb") {
          for(let i = 0; i < postcard.length; i++) {
            if(postcard[i].classList.contains("print")) {
              postcard[i].style.display = "none";
            }
            else {
              postcard[i].style.display = "block";
            }
          }
      }
      else {
        for(let i = 0; i < postcard.length; i++) {
              postcard[i].style.display = "block";
        }
      }
    }, false);
  });

