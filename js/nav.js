function handleNav() {
  console.log("CLICK");

  var nav = document.getElementById("nav");

  if (nav.className === "") {
    nav.className = "responsive";
  }
  else {
    nav.className = "";
  }
}