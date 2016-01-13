chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});
// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  var iframeList = document.querySelectorAll('.canvas');
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {

    // console.log("Body", iframeList[0].contentDocument.body);
    // console.log("Head", iframeList[0].contentDocument.head);

    var domInfo = [];
    domInfo.push(iframeList[0].contentDocument.head.outerHTML)
    domInfo.push(iframeList[0].contentDocument.body.outerHTML)
    // domInfo.push(iframeList[0].contentDocument.head.outerHTML)
    response(domInfo);
  }

  if ((msg.from === 'popup') && (msg.subject === 'injectCode')) {
    // iframeList[0]contentDocument.body.outerHTML = msg.someData
    iframeList[0].contentDocument.head.outerHTML = msg.emailHead;
    iframeList[0].contentDocument.body.outerHTML = msg.emailBody;
    response(status);

  }
  console.log(walkMeIdentityName)
});



