chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  var iframeList = document.querySelectorAll('.canvas');
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var domInfo = [];
    domInfo.push(iframeList[0].contentDocument.head.outerHTML);
    domInfo.push(iframeList[0].contentDocument.body.outerHTML);
    response(domInfo);
  }
  if ((msg.from === 'popup') && (msg.subject === 'injectCode')) {
    iframeList[0].contentDocument.head.outerHTML = msg.emailHead;
    iframeList[0].contentDocument.body.outerHTML = msg.emailBody;
    response(status);
  }
});



