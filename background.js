// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
        break;
        case "page-title":
            pageTitle();
        break;
    }
    return true;
});

// send a message to the content script
var colorDivs = function() {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#efefef"});
	});
}

var pageTitle = function() {
  // alert("running")
  chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, {type: "page-title", content: "Content Here"});
  });
}
