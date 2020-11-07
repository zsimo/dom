"use strict";

var helpers = require("/src/helpers.js");


function play () {

    var header = document.querySelector("header");
    var main = document.querySelector("main");

    var col = main.querySelectorAll(".col")[1];
    var newCol = document.createElement("div");
    newCol.className = "col";


    // header
    var p = document.createElement("p");
    p.innerText = "header heigth " + header.clientHeight;
    newCol.appendChild(p);
    // main
    p = document.createElement("p");
    p.innerText = "main clientHeight " + main.clientHeight +
                    ", offsetTop " + main.offsetTop +
                    ", scrollHeight " + main.scrollHeight +                
                    ", offsetParent " + main.offsetParent.tagName;
    newCol.appendChild(p);
    p = document.createElement("p");
    p.innerText = "body heigth " + document.body.clientHeight;
    newCol.appendChild(p);

    var button = document.createElement("button");
    button.innerText = "Adhust main height [body.clientHeight - header.clientHeight]";
    button.onclick = function () {
        helpers.adjustHeight(header, main);
    };
    newCol.appendChild(button);

    main.replaceChild(newCol, col);


}


window.addEventListener('resize', play);

play();