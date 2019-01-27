/*function showPic(whichpic) {
var source = whichpic.getAttribute("href");
var placeholder = document.getElementByID("placeholder");
placeholder.setAttribute("src", source);
}
var text = whichpic.getAttribute("title");
var body_element = document.getElementsByTagName("body")[0];
body_element.childNodes.length; */
//functionality of adding multiple js scripts to load after HTML loads - outdated technique
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
//creating an insertAfter function
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = doctype.createTextNode("Choose an image");
	description.appendChild(desctext);
	//using insertAfter in preparePlaceholder
	var gallery = document.getElementByID("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

function countBodyChildren() {
var body_element = document.getElementsByTagName("body")[0];
//alert (body_element.childNodes.length);
}
window.onload = countBodyChildren;
//onclick = "showPic(this);"

function prepareGallery() {
	if (!document.getElementsByTagName || !document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for ( var i=0; i < links.length; i++) {
		links[i].onclick = function() {
		 return showPic(this) ? false : true;
		}
		links[i].onkeypress = links[i].onclick;
	}
}

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
		//console.log("description", description);
	}
	return true;
}


addLoadEvent(prepareGallery);
//moving placeholder showPic script to js from html





