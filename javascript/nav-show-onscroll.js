const navBar = document.getElementById("nav-bar")
const secondNavbar = document.getElementById("second-nav-bar")

const scrollpos = 0;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (scrollpos != currentScrollPos) {
    navBar.style.translate = "0 100%";
    secondNavbar.style.display = "none"

  } 
  if (scrollpos == currentScrollPos) {
    navBar.style.translate = "0 -100%";
    secondNavbar.style.display = "flex"
  }
}