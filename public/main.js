(()=>{var e={188:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{margin:0;padding:0;background:#f6edde}",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},171:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var o=n(379),r=n.n(o),i=n(188);r()(i.Z,{insert:"head",singleton:!1});const c=i.Z.locals||{}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var l=e[r],a=t.base?l[0]+t.base:l[0],s=n[a]||0,d="".concat(a," ").concat(s);n[a]=s+1;var u=c(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,g=0;function h(e,t){var n,o,r;if(t.singleton){var i=g++;n=p||(p=a(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=a(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(171);var e=document.getElementById("container"),t=document.getElementById("child");function o(){console.log("container.clientHeight",e.clientHeight,"container.scrollHeight",e.scrollHeight),console.log("child.offsetTop",t.offsetTop,"container.scrollTop",e.scrollTop),t.offsetTop+t.clientHeight>e.clientHeight+e.scrollTop?(console.log("go down"),e.scrollTop+=t.clientHeight):t.offsetTop<e.scrollTop?(console.log("go up"),e.scrollTop-=t.clientHeight):console.log("?")}e.addEventListener("click",(function(e){var t=e.target;console.log("clientHeight",t.clientHeight),console.log("scrollHeight",t.scrollHeight),console.log("scrollTop",t.scrollTop),console.log("offsetHeight",t.offsetHeight),console.log("clientTop",t.clientTop)})),document.getElementById("up").addEventListener("click",(function(){t.style.top=t.style.top?parseInt(t.style.top,10)-50+"px":"50px",o()})),document.getElementById("down").addEventListener("click",(function(){t.style.top=t.style.top?parseInt(t.style.top,10)+50+"px":"50px",o()})),function(){for(var t=document.createElement("ul"),n=0;n<100;n++){var o=document.createElement("li");o.innerText="ciao"+n,t.appendChild(o)}e.appendChild(t)}()})()})();