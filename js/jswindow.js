
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

function rand(num) {
  return Math.floor(Math.random() * num) + 0;
}
var mang1 =
  ['bigstock-desktop-mix-on-a.jpg'
    , 'office-desk-background-2.jpg'
    , 'banner3.jpg'
    , 'banner2.jpg'
    , 'banner1.jpg'
  ],//
  mang2 = [
    'office-supplies-with-computer-on-white-desk_1357-241.jpg'
    , 'home_bg.jpg'
    , 'paper-pencil-work-touch-business-usb_1421-592.jpg'
    , 'frame-with-office-equipment-on-white-desk_1357-235.jpg'
  ]
document.getElementsByTagName("body")[0].style
  = "background-image: url('img/"
  + mang1[rand(mang1.length)] + "');"
document.body.onmouseenter = function () {
  setTimeout(function () {
    document.getElementsByTagName("body")[0].style =
      "background-image: url('img/"
      + mang2[rand(mang2.length)] + "');"
  }, 500);
}

// lịch và đòng hồ

var lich = document.getElementsByClassName('right_bar')[0];

var _d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
lich.insertAdjacentHTML("beforeend", '<h2>' + days[_d.getDay()] + '</h2>')
lich.insertAdjacentHTML("beforeend", '<h2>' + _d.getUTCMonth() + '</h2>')
lich.insertAdjacentHTML("beforeend", '<h2>' + _d.getFullYear() + '</h2>')

//dong ho
var dh = document.getElementsByClassName('right_clock')[0];
setInterval(function () {
  dh.innerHTML = ''; var str;
  str = '<h2>' + _d.getHours() + ":" + _d.getMinutes() + '</h2>'
  dh.insertAdjacentHTML("beforeend", str);
}, 500);
