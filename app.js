const nav = document.querySelector("header .nav");
const ul = document.querySelector("header .nav ul");
const navToggle = document.querySelector("header .nav-toggle");


navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("open")
    nav.classList.toggle("open")
})


// remove loader page when page loads
const loader = document.querySelector(".loader");

window.addEventListener("load", function() {
  loader.classList.add("loaded");
});


// testimonial slider

const allSlides = document.querySelectorAll(".testimonial-section .row .slide");
const nextBtn = document.querySelector(".testimonial-section .next")
const prevBtn = document.querySelector(".testimonial-section .prev")
let currentlySelected = 0;
nextBtn.addEventListener("click", function() {
  showNext();
})

prevBtn.addEventListener("click", function() {
  currentlySelected--;
  if(currentlySelected < 0) {
    currentlySelected = allSlides.length - 1;
  }
  for(let i = 0; i < allSlides.length; i++) {
    allSlides[i].classList.remove("active")
  }
  allSlides[currentlySelected].classList.add("active")
})

setInterval(function() {
  showNext()
}, 3000)
function showNext () {
  currentlySelected++;
  if(currentlySelected > allSlides.length - 1) {
    currentlySelected = 0;
  }
  for(let i = 0; i < allSlides.length; i++) {
    allSlides[i].classList.remove("active")
  }
  allSlides[currentlySelected].classList.add("active")
}