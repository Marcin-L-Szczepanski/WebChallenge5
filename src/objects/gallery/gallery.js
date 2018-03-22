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
          return postcard.classList.contains("print") ? postcard.classList.add("postcard--displayed") : postcard.classList.remove("postcard--displayed");
        });
        break;
      case "categoryWeb":
        postcards.forEach(function (postcard) {
          return postcard.classList.contains("web") ? postcard.classList.add("postcard--displayed") : postcard.classList.remove("postcard--displayed");
        });
        break;
      default:
        postcards.forEach(function (postcard) {
          return postcard.classList.add("postcard--displayed");
        });
    }
  }, false);
});