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


// filter template items
const filterBtns = document.querySelectorAll(".template-filter-btn button");
const filterItems = document.querySelector(".template-list .row").children;

for (let i = 0; i < filterBtns.length; i++) {
 filterBtns[i].addEventListener("click", function() {
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove("active");
    }
    this.classList.add("active");

    const target = this.getAttribute("data-target");
    for (let j = 0; j < filterItems.length; j++) {
      filterItems[j].style.display = "none";
      if (filterItems[j].getAttribute("data-id") === target) {
        filterItems[j].style.display = "block";
      }
      if (target === "all") {
        filterItems[j].style.display = "block";
      }
  }
 })
}