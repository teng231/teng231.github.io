
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// click cho nav

window.onload = function () {
  var str = window.location.href;
  var spliter = str.split("#");
  if (spliter[1] === "") {
    modal.style.display = "none";
  }
  else if (spliter.length === 2 && spliter[1] === "blog") {
    blogFn();
  }
  else if (spliter[1] === "contact") {
    contactFn();
  }
  else if (spliter[1] === "about") {
    aboutFn();
  }
  else if (spliter[1] === "skills") {
    skillsFn();
  }
  else if (spliter.length == 3) {
    goPost(spliter[2]);
  }
}
about.onclick = aboutFn;
blog.onclick = blogFn;
home.onclick = homeFn;
contact.onclick = contactFn;
skills.onclick = skillsFn;
