"use strict";

const postcard = document.querySelectorAll(".postcard__icon");
const galleryBody = document.getElementById("galleryBody");

for (var i = 0; i < postcard.length; i++) {
  postcard[i].addEventListener("click", function() {
    const postcardModal = document.createElement("div");
    const postcardModalPicture = document.createElement("img");
    const postcardModalButton = document.createElement("button");
    postcardModal.classList.add("postcard__modal");
    postcardModalPicture.classList.add("postcard__modal-picture");
    postcardModalButton.classList.add("postcard__modal-button");
    postcardModalButton.innerHTML = "X";
    galleryBody.appendChild(postcardModal);
    postcardModal.appendChild(postcardModalPicture);
    postcardModal.appendChild(postcardModalButton);
    postcardModalPicture.src = this.parentElement.parentElement.firstElementChild.src;
    
    postcardModalButton.addEventListener("click", function () {
                                     galleryBody.removeChild(postcardModal);
                                     }, false);
  }, false)
}

