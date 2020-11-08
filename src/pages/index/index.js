"use strict";

require("/src/common.js");

var main = document.querySelector("main");

var pages = [
    "01",
    "02",
    "03"
];

var ul = document.createElement("ul");
pages.forEach(function (page) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "/" + page;
    a.innerText = "page #" + page;
    li.appendChild(a);
    ul.appendChild(li);
});

main.appendChild(ul);