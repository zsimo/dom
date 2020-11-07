"use strict";

module.exports = {
    adjustHeight: function (header, main) {
        main.style.height = document.body.clientHeight - header.clientHeight + "px";
    }
};