function showPic(whichpic) {
var source = whichpic.getAttribute("href");
var placeholder = document.getElementByID("placeholder");
placeholder.setAttribute("src", source);
}
var text = whichpic.getAttribute("title");
var body_element = document.getElementsByTagName("body")[0];
body_element.childNodes.length;

function countBodyChildren() {
var body_element = document.getElementsByTagName("body")[0];
alert (body_element.childNodes.length);
}
window.onload = countBodyChildren;
onclick = "showPic(this);"

function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementByID("placeholder");
	placeholder.setAttribute("src", source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementByID("description");
	description.firstChild.nodeValue = text;
}


