const hamburger = document.getElementById("hamburger-menu");
const hamburger1 = document.getElementById("hamburger-menu-1");
const sidebarMenu = document.getElementById("sidebar-menu")
const logo = document.getElementById('logo')
const hamburgerItems = document.querySelectorAll(".hamburger-item")
const navbar = document.getElementById("nav-bar")
const body = document.getElementById("body")
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
  sidebarMenu.classList.toggle("show-sidebar")
  body.classList.toggle("no-scroll")
  logo.classList.toggle("invert")
  hamburgerItems.forEach((item) => {
    item.classList.toggle("black")
  })
});

hamburger1.addEventListener("click", function() {
  this.classList.toggle("open");
  sidebarMenu.classList.toggle("show-sidebar")
  body.classList.toggle("no-scroll")
  if (this.classList.contains('open')) (
    navbar.style.boxShadow = 'none'
  )
  if (this.classList.contains('open') == false) {
    navbar.style.boxShadow = '0px 1px 15px #00000059'
    navbar.style['-webkit-box-shadow'] = '0px 1px 15px #00000059'
    navbar.style['-moz-box-shadow'] = '0px 1px 15px #00000059'
  }
});

sidebarMenu.addEventListener("click", () => {
  if (hamburger.classList.contains('open')) {
    hamburger.classList.toggle("open")
    logo.classList.toggle("invert")
    hamburgerItems.forEach((item) => {
      item.classList.toggle("black")
    })
  }
  if (hamburger1.classList.contains('open')) {
    hamburger1.classList.toggle("open")
  }
  sidebarMenu.classList.toggle("show-sidebar")
  body.classList.toggle("no-scroll")
})