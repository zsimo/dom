(()=>{document.write("<h1>demo</h1>");var e=document.getElementById("container"),o=document.getElementById("child");function t(){console.log("container.clientHeight",e.clientHeight,"container.scrollHeight",e.scrollHeight),console.log("child.offsetTop",o.offsetTop,"container.scrollTop",e.scrollTop),o.offsetTop+o.clientHeight>e.clientHeight+e.scrollTop?(console.log("go down"),e.scrollTop+=o.clientHeight):o.offsetTop<e.scrollTop?(console.log("go up"),e.scrollTop-=o.clientHeight):console.log("?")}e.addEventListener("click",(function(e){var o=e.target;console.log("clientHeight",o.clientHeight),console.log("scrollHeight",o.scrollHeight),console.log("scrollTop",o.scrollTop),console.log("offsetHeight",o.offsetHeight),console.log("clientTop",o.clientTop)})),document.getElementById("up").addEventListener("click",(function(){o.style.top=o.style.top?parseInt(o.style.top,10)-50+"px":"50px",t()})),document.getElementById("down").addEventListener("click",(function(){o.style.top=o.style.top?parseInt(o.style.top,10)+50+"px":"50px",t()})),function(){for(var o=document.createElement("ul"),t=0;t<100;t++){var l=document.createElement("li");l.innerText="ciao"+t,o.appendChild(l)}e.appendChild(o)}()})();