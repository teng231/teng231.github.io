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
    else if (spliter[1] === "music") {
        musicFn();
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
music.onclick = musicFn;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function rand(num) {
    return Math.floor(Math.random() * (num - 0 + 1)) + 0;
}
var mang1 =
    ["https://i.imgur.com/CxD4ZNw.jpg"
        , 'img/home_bg.jpg'
        , "https://i.imgur.com/Ks44lpb.jpg"],//
    mang2 = [
        // 'img/home_bg.jpg'
        'https://i.imgur.com/FZZGhEk.jpg'
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
    h = h < 10 ? "0" + h : h; m = m < 10 ? "0" + m : m; s = s < 10 ? "0" + s : s;
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