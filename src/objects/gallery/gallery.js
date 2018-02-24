// https://stackoverflow.com/questions/7459704/in-javascript-what-is-the-best-way-to-convert-a-nodelist-to-an-array
var categories = document.querySelectorAll(".gallery__category");
categories = Array.prototype.slice.call(categories, 0);
var postcards = document.querySelectorAll(".postcard");
postcards = Array.prototype.slice.call(postcards, 0);

categories.forEach(function (category) {
  category.addEventListener("click", function () {
    categories.forEach(function (link) {
      return link.classList.add("gallery__category--inactive");
    });
    this.classList.remove("gallery__category--inactive");

    switch (category.id) {
      case "categoryPrint":
        postcards.forEach(function (postcard) {
          return postcard.classList.contains("print") ? postcard.classList.remove("postcard--hidden") : postcard.classList.add("postcard--hidden");
        });
        break;
      case "categoryWeb":
        postcards.forEach(function (postcard) {
          return postcard.classList.contains("web") ? postcard.classList.remove("postcard--hidden") : postcard.classList.add("postcard--hidden");
        });
        break;
      default:
        postcards.forEach(function (postcard) {
          return postcard.classList.remove("postcard--hidden");
        });
    }
  }, false);
});

/*
"use strict"; 

const categories = document.querySelectorAll(".gallery__category");
const postcards = document.querySelectorAll(".postcard");

categories.forEach(function (category) {
  category.addEventListener("click", function () {
    categories.forEach(link => link.classList.add("gallery__category--inactive"));
    this.classList.remove("gallery__category--inactive");

    switch (category.id) {
      case "categoryPrint":
        postcards.forEach(postcard => postcard.classList.contains("print") ? postcard.style.display = "block" : postcard.style.display = "none");
        break;
      case "categoryWeb":
        postcards.forEach(postcard => postcard.classList.contains("web") ? postcard.style.display = "block" : postcard.style.display = "none");
        break;
      default:
        postcards.forEach(postcard => postcard.style.display = "block");
    }
  }, false);
});
*/



/*
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

*/
