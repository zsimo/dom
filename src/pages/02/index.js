"use strict";

require("/src/common.js");

var helpers = require("/src/helpers.js");

var header = document.querySelector("header");
var main = document.querySelector("main");
var textarea = document.querySelector("textarea");


textarea.addEventListener("scroll", onSroll);


function onSroll (event) {
    var target = event.target;


    var scrollEnd = target.scrollHeight - target.scrollTop <= target.clientHeight;
    var col = main.querySelectorAll(".col")[1];
    var newCol = document.createElement("div");
    newCol.className = "col";

    if (scrollEnd) {
        var p = document.createElement("p");
        p.innerText = "scroll end";
        newCol.appendChild(p);
    }
    
    main.replaceChild(newCol, col);
}

helpers.adjustHeight(header, main);
window.addEventListener('resize', function () {
    helpers.adjustHeight(header, main);
});