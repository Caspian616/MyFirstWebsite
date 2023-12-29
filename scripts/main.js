var navLinks = document.getElementById("navLinks");
var menuBar = document.getElementById("menuBar");
var title = document.getElementById("title");

function showMenu(){
  navLinks.style.right = "0";
  menuBar.style.visibility = "hidden";
  title.style.visibility = "hidden";
}

function hideMenu(){
  navLinks.style.right = "-300px";
  menuBar.style.visibility = "visible";
  title.style.visibility = "visible";
}