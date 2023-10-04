const hamburger = document.getElementById("hamburger-menu");
const hamburger1 = document.getElementById("hamburger-menu-1");
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
});

hamburger1.addEventListener("click", function() {
  this.classList.toggle("open");
});