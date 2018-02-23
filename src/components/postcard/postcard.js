"use strict";

const postcard = document.querySelectorAll(".postcard__icon");
const galleryBody = document.getElementById("galleryBody");
const numberOfPictures = galleryBody.childElementCount;
console.log(numberOfPictures);

document.addEventListener("click", function(e) {
  if (window.innerWidth > 650) {
    if (e.target.classList.contains("postcard__icon")) {
      openModal(e);
    }
  }
}, false);

function openModal(e) {
  const postcardModal = document.createElement("div");
  const postcardModalPicture = document.createElement("img");
  const postcardModalButton = document.createElement("button");
  postcardModal.classList.add("postcard__modal");
  postcardModalPicture.classList.add("postcard__modal-picture");
  postcardModalButton.classList.add("postcard__modal-button");
  postcardModalButton.innerHTML = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1"><g stroke="#dfdfdf"  stroke-width="10" ><line x1="10" x2="40" y1="10" y2="40" /> <line x1="10" x2="40" y1="40" y2="10" /></g></svg>';
  galleryBody.appendChild(postcardModal);
  postcardModal.appendChild(postcardModalPicture);
  postcardModal.appendChild(postcardModalButton);
  postcardModalPicture.src = e.target.parentElement.parentElement.firstElementChild.src;
  let currentPostcard = e.target.parentElement.parentElement;
  
  postcardModalButton.addEventListener("click", closeModal);
  document.addEventListener("keydown", function(e) {
    switch (e.keyCode) {
      case 27: 
        closeModal();
        break;
      case 37:
        if (!currentPostcard.previousElementSibling) {
          break;
        }
        else {
          postcardModalPicture.src = currentPostcard.previousElementSibling.firstElementChild.src;
          currentPostcard = currentPostcard.previousElementSibling;
        }
        break;
      case 39:
        if (!currentPostcard.nextElementSibling) {
          break;
        }
        else {
          postcardModalPicture.src = currentPostcard.nextElementSibling.firstElementChild.src;
          currentPostcard = currentPostcard.nextElementSibling;
        }
        break;
    }
  }, false);
  document.addEventListener("click", function(e) {
   if (e.target.nodeName !== "IMG")  {
      closeModal();
    }
  }, false);

  function closeModal() {
    galleryBody.removeChild(postcardModal);
  }
}