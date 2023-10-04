const hamburger = document.getElementById("hamburger-menu");
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
});