function $(id) {
    return document.getElementById(id);
}

function _(cl) {
    return document.getElementsByClassName(cl);
}

function _setAnimate(modal, modal_content, name, cb) {
    modal.style.display = "none";
    if (typeof cb === "function") cb();
    modal_content.style['animation-name'] = name;
    modal_content.style['-webkit-animation-name'] = name;
}

function _updateHeader(modal, _name, _str, cb) {
    setTimeout(function () {
        document.title = _name + " - Nguyễn Mạnh Tể";
        document.querySelector('meta[name="description"]')['content'] = _name + " - Nguyễn Mạnh Tể";
        $("main_body").innerHTML = _str;
        cb()
        modal.style.display = "block";
    }, 50);
}

function _appendHtml(modal, _name, _str, cb) {
    setTimeout(function () {
        // thay thế
        cb();
        document.title = _name + " - Nguyễn Mạnh Tể";
        document.querySelector('meta[name="description"]')['content'] = _name + " - Nguyễn Mạnh Tể"
        $("main_body").insertAdjacentHTML('beforeend', _str);

        modal.style.display = "block";
    }, 50);
}

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