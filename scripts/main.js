var navLinks = document.getElementById("navLinks");
var menuBar = document.getElementById("menuBar");

function showMenu(){
  navLinks.style.right = "0";
  menuBar.style.visibility = "hidden";
}

function hideMenu(){
  navLinks.style.right = "-200px";
  menuBar.style.visibility = "visible";
}