"use strict";

var base = document.createElement("base");
var href = window.location.href.split("/")
.filter(function (segment) {
    return segment;
})
// remove last segment of the url
.slice(0, -1).join("/")
console.log(href)
base.href = href;

document.head.appendChild(base);
console.log("common")