console.log("Hello World");



// PERSISTENT HEADER
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
//get the header
const header = document.getElementById("header");
// Get the offset position of the navbar
const sticky = header.offsetTop;
// Add the sticky class to the header when reaches its scroll position. 
// Remove "sticky" when leaving the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + '/success.html';
});

