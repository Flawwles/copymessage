chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});
// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var iframeList = document.querySelectorAll('.canvas');
    var divTest = document.querySelectorAll('.canvas');
    console.log("Head", iframeList[0].contentDocument.head);
    console.log("Body", iframeList[0].contentDocument.body);
    var domInfo = {
      total:   document.querySelectorAll('*').length,
      title:   JSON.stringify(document.title),
      emailHead: JSON.stringify(iframeList[0].contentDocument.head),
      emailBody: iframeList[0].contentDocument.body,
      divHtml: JSON.stringify(divTest[0].style)
    };
    console.log(divTest[0].style);
    console.log(JSON.stringify(divTest[0].style));
    response(domInfo);
  }
});
