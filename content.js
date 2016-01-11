chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are not any divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}
		break;
	case "page-title":
			document.body.innerHTML += '<div style="display: block; background: black; width: 200px;">TEST</div>';

			var pageTitle = document.title;
			alert(pageTitle)
			// alert(message.content);
			sendResponse(document.title);
			break;

	}
});
