window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({
	        type: "color-divs"
	    });
	}
  document.getElementById("button-title").onclick = function() {
    chrome.extension.sendMessage({
          type: "page-title"
      });
    document.getElementById("page-title-ul").appendChild('li');
  }
}
