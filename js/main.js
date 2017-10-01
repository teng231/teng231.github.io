
var page = 0;
var limit = 3;
// const node = "http://localhost:3001/api/blog";
// const node = "https://cms-backend.herokuapp.com/api/blog";
const node_blog_info = "https://kutekiu.herokuapp.com/api/Blog/getBlogInfo"
const node_blog_per = "https://kutekiu.herokuapp.com/api/Blog/getBlogById"


// Get the modal  
var modal = $('myModal');
var element = $('main_body');
var loader = _("loader")[0];


function blogProcess(data) {
  var per_log = '<div class="block_main blog_main_bar" style="background-image: url('
    + '\'{{link}}\'); "><div class="blog_time">Time: {{time}}</div><div class="blog_big_text big_text_title" >'
    + '{{title}}</div><a href= "#blog#{{_id}}" class="blog_readMore" onclick= "goPost(\'{{_id}}\')" > Read more</a></div>';
  //02:87 10/10/2017
  var posts = JSON.parse(data).data, str_post = "";

  for (var i = 0; i < posts.length; i++) {
    var dateCreate = new Date(posts[i].dateCreate), h, d;
    d = dateCreate.toISOString().slice(0, 10);
    h = dateCreate.getHours() + " : " + dateCreate.getMinutes();
    str_post += per_log.replace("{{link}}", posts[i].link)
      .replace(/\{\{_id\}\}/g, posts[i].id)
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
      loadXMLDoc(node_blog_info + "?limit=" + limit + "&page=" + page, (data) => {
        $("main_body")
          .getElementsByClassName("blog_container")[0]
          .insertAdjacentHTML('beforeend', blogProcess(data));
      })
    }
  }
}

var about = document.querySelector("#about"),
  contact = document.querySelector("#contact"),
  blog = document.querySelector("#blog"),
  home = document.querySelector("#home"),
  skills = document.querySelector("#skills"),
  notes = document.querySelector("#notes"),
  music = document.querySelector("#music"),
  modal_content = document.querySelector("#modal_content"),
  per_blog = document.querySelectorAll(".blog_readMore");

function aboutFn() {
  _setAnimate(modal, modal_content, "animateleft");
  _updateHeader(modal, "About me", str_about, () => {
    runSlide();
  });
}
function blogFn() {
  page = 0;
  _setAnimate(modal, modal_content, "bounceIn", () => {
    $("main_body").innerHTML = ""
  })
  loader.setAttribute('style', 'display:block;');
  loadXMLDoc(node_blog_info + "?limit=" + limit + "&page=" + page, (data) => {
    _appendHtml(modal, "Blog", str_blog.replace("{{__template__}}", blogProcess(data)), () => {
      loader.setAttribute('style', 'display:none;');
    });
  })
}
function goPost(post) {
  _setAnimate(modal, modal_content, "bounceIn");
  loadXMLDoc(node_blog_per + "?id=" + post, (data) => {
    var data = JSON.parse(data).data;
    $("main_body").innerHTML = str_per_blog.replace("{{content}}", data.content)
      .replace("{{link}}", data.link).replace("{{title}}", data.title).replace(/\{\{tag\}\}/g, data.tag).replace("{{href}}", location.href);
    document.querySelector('meta[name="description"]')['content'] = "Post " + data.title + " - Nguyễn Mạnh Tể";
    // var x = document.createElement("META");
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

function musicFn() {

  _setAnimate(modal, modal_content, "animateright")
  _updateHeader(modal, "Musics ", str_music, () => {
  });

}


function contactFn() {
  _setAnimate(modal, modal_content, "animateright")
  _updateHeader(modal, "Contact me", str_contact, () => {
  });
}

function skillsFn() {
  _setAnimate(modal, modal_content, "animatetop")
  _updateHeader(modal, "Skills", str_skills, () => {
  });
}


