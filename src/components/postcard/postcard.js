"use strict";

const postcard = document.querySelectorAll(".postcard__icon");
const galleryBody = document.getElementById("galleryBody");

for (var i = 0; i < postcard.length; i++) {
  postcard[i].addEventListener("click", function() {
    const postcardModal = document.createElement("div");
    const postcardModalPicture = document.createElement("img");
    galleryBody.appendChild(postcardModal);
    postcardModal.classList.add("postcard__modal");
    postcardModal.appendChild(postcardModalPicture);
    postcardModalPicture.src = this.parentElement.parentElement.firstElementChild.src;
    postcardModalPicture.classList.add("postcard__modal-picture");
  }, false)
}