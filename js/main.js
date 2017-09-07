// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("about");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// click cho nav

var about = document.querySelector("#about"),
  contact = document.querySelector("#contact"),
  home = document.querySelector("#home"),
  skills = document.querySelector("#skills"),
  modal_content = document.querySelector("#modal_content");
about.onclick = function () {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animateleft';
  modal_content.style['-webkit-animation-name'] = 'animateleft';
  setTimeout(function () {
    document.getElementById("main_body").innerHTML = str_about;
    modal.style.display = "block";
  }, 100);
}
home.onclick = function () {
  modal.style.display = "none";
}
contact.onclick = function () {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animateright';
  modal_content.style['-webkit-animation-name'] = 'animateright';
  setTimeout(function () {
    document.getElementById("main_body").innerHTML = str_contact;
    modal.style.display = "block";
  }, 100);
}
skills.onclick = function () {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animatetop';
  modal_content.style['-webkit-animation-name'] = 'animatetop';
  setTimeout(function () {
    document.getElementById("main_body").innerHTML = str_skills;
    modal.style.display = "block";
  }, 100);
}