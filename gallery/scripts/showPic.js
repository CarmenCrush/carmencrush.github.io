function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	console.log("description", description);
	description.firstChild.nodeValue = text;
	//alert(description.firstChild.nodeValue);
}

