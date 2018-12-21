/*function showPic(whichpic) {
var source = whichpic.getAttribute("href");
var placeholder = document.getElementByID("placeholder");
placeholder.setAttribute("src", source);
}
var text = whichpic.getAttribute("title");
var body_element = document.getElementsByTagName("body")[0];
body_element.childNodes.length; */

function countBodyChildren() {
var body_element = document.getElementsByTagName("body")[0];
//alert (body_element.childNodes.length);
//i got 20
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
alert(description.firstChild.nodeValue);
//this alert did nothing

//why do i need to put this in another .js file?