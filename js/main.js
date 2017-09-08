// Get the modal
var modal = document.getElementById('myModal');

window.onload = function () {
  var str = window.location.href;
  var spliter = str.split("#");
  if (spliter.length !== 2 || spliter[1] === "") {
    modal.style.display = "none";
  } else {
    goPost(spliter[1]);
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

// loadXMLDoc(node, (data) => {
//   var data22 = JSON.parse(data);
//   debugger
// })

// Get the button that opens the modal
var btn = document.getElementById("blog");

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
  blog = document.querySelector("#blog"),
  home = document.querySelector("#home"),
  skills = document.querySelector("#skills"),
  modal_content = document.querySelector("#modal_content"),
  per_blog = document.querySelectorAll(".blog_readMore");

about.onclick = function () {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animateleft';
  modal_content.style['-webkit-animation-name'] = 'animateleft';
  setTimeout(function () {
    document.getElementById("main_body").innerHTML = str_about;
    modal.style.display = "block";
  }, 50);
}
blog.onclick = function () {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'bounceIn';
  modal_content.style['-webkit-animation-name'] = 'bounceIn';
  loadXMLDoc(node, (data) => {
    var per_log = '<div class="block_main" style="background-image: url('
      + '\'{{link}}\'); "><div class="blog_big_text" >'
      + '{{title}}</div><a href= "#{{_id}}" class="blog_readMore" onclick= "goPost(\'{{_id}}\')" > Read more</a></div>';

    var posts = JSON.parse(data), str_post = "";

    for (var i = 0; i < posts.length; i++) {
      str_post += per_log.replace("{{link}}", posts[i].link)
        .replace(/\{\{_id\}\}/g, posts[i]._id)
        .replace("{{title}}", posts[i].title);
    }

    setTimeout(function () {

      // thay thế
      document.getElementById("main_body").innerHTML = str_blog.replace("{{__template__}}", str_post);
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
    document.getElementById("main_body").innerHTML
      = str_per_blog.replace("{{content}}", data.content)
        .replace("{{link}}", data.link)
        .replace("{{title}}", data.title)
        .replace(/\{\{tag\}\}/g, data.tag)
    modal.style.display = "block";
  })
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
  }, 50);
}
skills.onclick = function () {
  modal.style.display = "none";
  modal_content.style['animation-name'] = 'animatetop';
  modal_content.style['-webkit-animation-name'] = 'animatetop';
  setTimeout(function () {
    document.getElementById("main_body").innerHTML = str_skills;
    modal.style.display = "block";
  }, 50);
}

