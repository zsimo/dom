"use strict";


require("/src/common.js");
var helpers = require("/src/helpers.js");

var header = document.querySelector("header");
var main = document.querySelector("main");
var container = main.querySelectorAll(".col")[0];
var up = document.getElementById("up");
var down = document.getElementById("down");



function addList () {
    var div = document.createElement("div");
    div.className = "table-container";
    
    var table = document.createElement("table");
    for (var i = 0; i < 100; i ++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = "ciao" + i;
        if (i === 0) {
            td.className = "selected";
        }
        tr.appendChild(td);
        table.appendChild(tr);
    }
    
    div.appendChild(table);

    container.appendChild(div);
}

addList();

function select (direction) {
    
    var selectedItem = document.querySelector("td.selected");
    var tableContainer = document.querySelector(".table-container");

    var row = selectedItem.parentElement;
    var table = row.parentElement;
    var rowIndex = row.rowIndex;
    if (direction === "up") {
        rowIndex --;
    }
    if (direction === "down") {
        rowIndex ++;
    }

    if (rowIndex < 0 || rowIndex >= table.rows.length) {
        return;
    }

    
    selectedItem.classList.remove("selected");
    var newSelectedItem = table.rows[rowIndex].querySelector("td");
    newSelectedItem.classList.add("selected");


    var position;
    var offset = newSelectedItem.offsetHeight;
    if (direction === "up") {
        position = newSelectedItem.offsetTop;
        if ((newSelectedItem.offsetTop - tableContainer.scrollTop) < 0) {
            tableContainer.scrollTop -= offset;
        }

    } else {
        position = newSelectedItem.offsetHeight + newSelectedItem.offsetTop;
        if (position >= tableContainer.offsetHeight) {
            tableContainer.scrollTop += offset;
        }
    }
  
    
}

up.addEventListener("click", function () {
    select("up");
});
down.addEventListener("click", function () {
    select("down");
});

helpers.adjustHeight(header, main);
window.addEventListener('resize', function () {
    helpers.adjustHeight(header, main);
});

window.onkeydown = function (event) {
    if (event.key === "ArrowUp") {
        select("up");
    } else if (event.key === "ArrowDown") {
        select("down");
    }
}
