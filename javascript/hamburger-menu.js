const hamburger = document.getElementById("hamburger-menu"); // Cover image hamburger menu icon
const hamburger1 = document.getElementById("hamburger-menu-1"); // Main Hamburger menu icon 
const hamburgerItems = document.querySelectorAll(".hamburger-item");

const sidebarMenu = document.getElementById("sidebar-menu");
const logo = document.getElementById('logo');
const navbar = document.getElementById("nav-bar");
const body = document.getElementById("body");

// Event listener for cover image hamburger menu
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
  sidebarMenu.classList.toggle("show-sidebar");
  body.classList.toggle("no-scroll");
  logo.classList.toggle("invert");
  hamburgerItems.forEach((item) => {
    item.classList.toggle("black");
  });
});

// Event listener for the main hamburger menu
hamburger1.addEventListener("click", function() {
  this.classList.toggle("open");
  sidebarMenu.classList.toggle("show-sidebar");
  body.classList.toggle("no-scroll");

  if (this.classList.contains('open')) {
    navbar.style.boxShadow = 'none';
    navbar.style['-webkit-box-shadow'] = 'none';
    navbar.style['-moz-box-shadow'] = 'none';
  } else {
    navbar.style.boxShadow = '0px 1px 15px #00000059';
    navbar.style['-webkit-box-shadow'] = '0px 1px 15px #00000059';
    navbar.style['-moz-box-shadow'] = '0px 1px 15px #00000059';
  }
});

// Event listener for clicks on the sidebar menu
sidebarMenu.addEventListener("click", () => {
  if (hamburger.classList.contains('open')) {
    hamburger.classList.toggle("open");
    logo.classList.toggle("invert");
    hamburgerItems.forEach((item) => {
      item.classList.toggle("black");
    });
  }

  if (hamburger1.classList.contains('open')) {
    hamburger1.classList.toggle("open");
  }

  sidebarMenu.classList.toggle("show-sidebar");
  body.classList.toggle("no-scroll");

  if (hamburger1.classList.contains('open')) {
    navbar.style.boxShadow = 'none';
    navbar.style['-webkit-box-shadow'] = 'none';
    navbar.style['-moz-box-shadow'] = 'none';
  } else {
    navbar.style.boxShadow = '0px 1px 15px #00000059';
    navbar.style['-webkit-box-shadow'] = '0px 1px 15px #00000059';
    navbar.style['-moz-box-shadow'] = '0px 1px 15px #00000059';
  }
});
