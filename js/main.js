
var page = 0;
var limit = 3;


function $(id) {
  return document.getElementById(id);
}
function _(cl) {
  return document.getElementsByClassName(cl);
}
// Get the modal  
var modal = $('myModal');
var element = $('main_body');
var loader = _("loader")[0];
function blogProcess(data) {
  var per_log = '<div class="block_main blog_main_bar" style="background-image: url('
    + '\'{{link}}\'); "><div class="blog_time">Time: {{time}}</div><div class="blog_big_text big_text_title" >'
    + '{{title}}</div><a href= "#blog#{{_id}}" class="blog_readMore" onclick= "goPost(\'{{_id}}\')" > Read more</a></div>';
  //02:87 10/10/2017
  var posts = JSON.parse(data), str_post = "";

  for (var i = 0; i < posts.length; i++) {
    var dateCreate = new Date(posts[i].dateCreate), h, d;
    d = dateCreate.toISOString().slice(0, 10);
    h = dateCreate.getHours() + " : " + dateCreate.getMinutes();
    str_post += per_log.replace("{{link}}", posts[i].link)
      .replace(/\{\{_id\}\}/g, posts[i]._id)
      .replace("{{title}}", posts[i].title)
      .replace("{{time}}", h + " " + d);
  }
  return str_post;
}



element.onscroll = function () {
  var a = element.scrollTop, b = element.scrollHeight - element.clientHeight;
  var str = window.location.href;
  var spliter = str.split("#");
  if (spliter.length == 2 && spliter[1] === 'blog') {
    if (a / b > 0.75) {
      page++;
      loadXMLDoc(node + "?limit=" + limit + "&page=" + page, (data) => {
        $("main_body")
          .getElementsByClassName("blog_container")[0]
          .insertAdjacentHTML('beforeend', blogProcess(data));
      })
    }


  }
}

// const node = "http://localhost:3001/api/blog";
const node = "https://baseserver.herokuapp.com/api/blog";
function loadXMLDoc(url, cb) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
var about = document.querySelector("#about"),
  contact = document.querySelector("#contact"),
  blog = document.querySelector("#blog"),
  home = document.querySelector("#home"),
  skills = document.querySelector("#skills"),
  modal_content = document.querySelector("#modal_content"),
  per_blog = document.querySelectorAll(".blog_readMore");

function aboutFn() {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animateleft';
  modal_content.style['-webkit-animation-name'] = 'animateleft';

  setTimeout(function () {
    document.title = "About me - Nguyễn Mạnh Tể";
    document.querySelector('meta[name="description"]')['content'] = "About me - Nguyễn Mạnh Tể";
    $("main_body").innerHTML = str_about;
    runSlide();
    modal.style.display = "block";
  }, 50);
}
function blogFn() {
  page = 0;
  modal.style.display = "none";
  element.innerHTML = "";
  modal_content.style['animation-name'] = 'bounceIn';
  modal_content.style['-webkit-animation-name'] = 'bounceIn';
  loader.setAttribute('style', 'display:block;');
  loadXMLDoc(node + "?limit=" + limit + "&page=" + page, (data) => {
    loader.setAttribute('style', 'display:none;');
    document.title = "Blog - Nguyễn Mạnh Tể";
    document.querySelector('meta[name="description"]')['content'] = "Blog - Nguyễn Mạnh Tể"
    var str_post = blogProcess(data)
    setTimeout(function () {
      // thay thế
      $("main_body").insertAdjacentHTML('beforeend', str_blog.replace("{{__template__}}", str_post));
      modal.style.display = "block";
    }, 50);
  })
}
function goPost(post) {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'bounceIn';
  modal_content.style['-webkit-animation-name'] = 'bounceIn';

  loadXMLDoc(node + "?id=" + post, (data) => {
    var data = JSON.parse(data);
    $("main_body").innerHTML
      = str_per_blog.replace("{{content}}", data.content)
        .replace("{{link}}", data.link)
        .replace("{{title}}", data.title)
        .replace(/\{\{tag\}\}/g, data.tag)
        .replace("{{href}}", location.href);
    document.querySelector('meta[name="description"]')['content'] = "Post " + data.title + " - Nguyễn Mạnh Tể";
    var x = document.createElement("META");
    x.setAttribute("property", "og:image");
    x.setAttribute("content", data.link);
    document.head.appendChild(x);
    x = document.createElement("META");

    x.setAttribute("property", "og:title");
    x.setAttribute("content", "Post " + data.title + " - Nguyễn Mạnh Tể");
    document.head.appendChild(x);
    // document.querySelector('meta[property="og:image"]')['content'] = data.link;
    // document.querySelector('meta[property="og:title"]')['content'] = "Post " + data.title + " - Nguyễn Mạnh Tể";
    modal.style.display = "block";

    function fbSDK(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=125391211209683";
      fjs.parentNode.insertBefore(js, fjs);
    }
    fbSDK(document, 'script', 'facebook-jssdk');
  })
}
function homeFn() {
  document.title = "Home - Nguyễn Mạnh Tể";
  modal.style.display = "none";
}

function contactFn() {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animateright';
  modal_content.style['-webkit-animation-name'] = 'animateright';
  setTimeout(function () {
    document.title = "Contact me - Nguyễn Mạnh Tể";
    $("main_body").innerHTML = str_contact;
    modal.style.display = "block";
  }, 50);
}

function skillsFn() {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animatetop';
  modal_content.style['-webkit-animation-name'] = 'animatetop';
  setTimeout(function () {
    document.title = "Skills - Nguyễn Mạnh Tể";
    document.querySelector('meta[name="description"]')['content'] = "Skills - Nguyễn Mạnh Tể"
    $("main_body").innerHTML = str_skills;
    modal.style.display = "block";
  }, 50);
}


// Get the <span> element that closes the modal
var span = _("close")[0];

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
//-------------------------------------------------------------jswindow.js------------------------//
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

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function rand(num) {
  return Math.floor(Math.random() * (num - 0 + 1)) + 0;
}
var mang1 =
  ["https://i.imgur.com/CxD4ZNw.jpg", 'img/home_bg.jpg'],//
  mang2 = [
    // 'img/home_bg.jpg'
    'https://i.imgur.com/FZZGhEk.jpg'
    , "https://i.imgur.com/Ks44lpb.jpg"
    , "https://i.imgur.com/79QJ0Iz.jpg"
    , "https://i.imgur.com/UyZC2mI.jpg"
    , 'https://i.imgur.com/zL7SYHl.jpg'
    , 'https://i.imgur.com/mMdeMF6.jpg'
    , 'https://i.imgur.com/sZSZeHz.jpg'
  ]
document.getElementsByTagName("body")[0].style
  = "background-image: url('"
  + mang1[rand(mang1.length - 1)] + "');"
document.body.onmouseenter = function () {
  setTimeout(function () {
    document.getElementsByTagName("body")[0].style =
      "background-image: url('"
      + mang2[rand(mang2.length - 1)] + "');"
  }, 1000);
}

// lịch và đòng hồ

var lich = _('right_bar')[0];

var _d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
lich.insertAdjacentHTML("beforeend", '<h2>' + days[_d.getDay()] + '</h2>')
lich.insertAdjacentHTML("beforeend", '<h2>' + _d.getDate() + '</h2>')
lich.insertAdjacentHTML("beforeend", '<h2>' + month[_d.getUTCMonth()] + '</h2>')
lich.insertAdjacentHTML("beforeend", '<h2>' + _d.getFullYear() + '</h2>')

//dong ho
var dh = _('right_clock')[0];
setInterval(function () {
  var str, h = _d.getHours(), m = _d.getMinutes(), s = _d.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  str = '<h2>' + h + " : " + m + '</h2>'
  dh.innerHTML = str;
  // dh.insertAdjacentHTML("beforeend", str);
}, 1000);


//send an email

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function sendAnEmail() {
  var name = $("input-name").value,
    email = $("input-email").value,
    subject = $("input-subject").value,
    message = $("input-message").value;
  if (!name || !email || !subject || !message || !validateEmail(email))
    alert("Có gì đó sai sai hay sao ý!!! ^.^ Email nhớ nhập đúng nhá.");
  else
    window.open('mailto:manhte231@gmail.com?subject=' + subject + '&body=' + "Name:" + name + "         \n" + "Message:" + message);
}