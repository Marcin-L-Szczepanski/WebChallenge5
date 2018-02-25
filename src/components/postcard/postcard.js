"use strict";

const postcard = document.querySelectorAll(".postcard__icon");
const galleryBody = document.getElementById("galleryBody");
const postcardss = document.querySelectorAll(".postcard");
console.log(postcardss);


document.addEventListener("click", function(e) {
  if (window.innerWidth > 650) {
    if (e.target.classList.contains("postcard__icon")) {
      openModal(e);
    }
  }
}, false);

function openModal(e) {
  const postcardModal = document.createElement("div");
  const postcardModalButtonParrent = document.createElement("div");
  const postcardModalPicture = document.createElement("img");
  const postcardModalCloseButton = document.createElement("button");
  const postcardModalPreviousButton = document.createElement("button");
  const postcardModalNextButton = document.createElement("button");
  postcardModal.classList.add("postcard__modal");
  postcardModalButtonParrent.classList.add("postcard__button-parrent");
  postcardModalPicture.classList.add("postcard__modal-picture");
  postcardModalCloseButton.classList.add("postcard__modal-button");
  postcardModalPreviousButton.classList.add("postcard__modal-button");
  postcardModalNextButton.classList.add("postcard__modal-button");
  postcardModalPreviousButton.innerHTML = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1"><g stroke="#dfdfdf"  stroke-width="10" ><line x1="40" y1="10" x2="26" y2="25" /> <line x1="22" y1="22" x2="40" y2="40" /></g></svg>';
  postcardModalCloseButton.innerHTML = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1"><g stroke="#dfdfdf" stroke-width="10"><line x1="10" y1="10" x2="40" y2="40" /> <line x1="10" x2="40" y1="40" y2="10" /></g></svg>';
  postcardModalNextButton.innerHTML = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1"><g stroke="#dfdfdf" stroke-width="10" ><line x1="10" y1="10" x2="28" y2="30" /><line x1="10" y1="40" x2="25" y2="25" /> </g></svg>';
  galleryBody.appendChild(postcardModal);
  postcardModal.appendChild(postcardModalPicture);
  postcardModal.appendChild(postcardModalButtonParrent);
  postcardModalButtonParrent.appendChild(postcardModalPreviousButton);
  postcardModalButtonParrent.appendChild(postcardModalCloseButton);
  postcardModalButtonParrent.appendChild(postcardModalNextButton);
  postcardModalPicture.src = e.target.parentElement.parentElement.firstElementChild.src;
  let currentPostcard = e.target.parentElement.parentElement;
  
  postcardModalPreviousButton.addEventListener("click", closeModal);
  postcardModalCloseButton.addEventListener("click", closeModal);
  postcardModalNextButton.addEventListener("click", closeModal);
  
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
          var previous = [];
          while (currentPostcard.previousElementSibling) {
            previous.push(currentPostcard = currentPostcard.previousElementSibling);
          }
          let previousEl = previous.find(function(previous) {
            if (previous.classList.contains("postcard--displayed")) {
              return true;
            }
          });
          postcardModalPicture.src = previousEl.firstElementChild.src;
          currentPostcard = previousEl;
        }
        break;
        
        /*let els = document.querySelectorAll("#galleryBody .postcard--displayed");
        console.log(els);
        console.log(postcardModalPicture);
        
        /*       if (currentPostcard.previousElementSibling) {
          console.log("Siema");
          console.log(currentPostcard);
          var prev = [];
          while (currentPostcard.previousElementSibling) {
            prev.push(currentPostcard = currentPostcard.previousElementSibling);
          }
          console.log(prev);
          let webs = [];
          for (let i = 0; i < prev.length; i++) {
            if (!prev[i].classList.contains('postcard--hidden')) {
            webs.push(prev[i]);
            }
            
          }

          postcardModalPicture.src = webs[0].firstElementChild.src;

            }

        currentPostcard = currentPostcard.previousElementSibling;


*/

        break;
      case 39:
        if (!currentPostcard.nextElementSibling) {
          break;
        }
        else {
          var next = [];
          while (currentPostcard.nextElementSibling) {
            next.push(currentPostcard = currentPostcard.nextElementSibling);
          }
          let nextEl = next.find(function(next) {
            if (next.classList.contains("postcard--displayed")) {
              return true;
            }
          });
          postcardModalPicture.src = nextEl.firstElementChild.src;
          currentPostcard = nextEl;
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