
var container = document.getElementById("container");
var child = document.getElementById("child");
container.addEventListener("click", click);

function click (event) {
    var target = event.target;

    console.log("clientHeight", target.clientHeight); //  CSS height + CSS padding - height of horizontal scrollbar (if present)
    console.log("scrollHeight", target.scrollHeight); // value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar. The height is measured in the same way as clientHeight
    console.log("scrollTop", target.scrollTop); //  gets or sets the number of pixels that an element's content is scrolled vertically.

    // scroll at the end
    // element.scrollHeight - element.scrollTop === element.clientHeight

    console.log("offsetHeight", target.offsetHeight); //  CSS height + CSS padding CSS border + height of horizontal scrollbar (if present)
     
    console.log("clientTop", target.clientTop);

}

function check () {
    console.log("container.clientHeight",container.clientHeight, "container.scrollHeight",container.scrollHeight);
    console.log("child.offsetTop",child.offsetTop, "container.scrollTop", container.scrollTop);

    // down
    if (child.offsetTop + child.clientHeight > container.clientHeight + container.scrollTop) {
        console.log("go down")
        container.scrollTop += child.clientHeight;
    }
    else if (child.offsetTop < container.scrollTop) {
        console.log("go up")
        container.scrollTop -= child.clientHeight;
    }
    // up
    else {
        console.log("?")
    }
}
