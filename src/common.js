"use strict";


return;
var links = document.querySelectorAll(".link");
for (var i = 0; i < links.length; i += 1) {
    var link = links[i];
    link.href = window.location.href + link.innerText;
    console.log(link.href)
}

