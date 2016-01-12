// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function() {
  // Update the relevant fields with the new data
  function setDOMInfo(info) {
    document.getElementById('text-area').value = info.emailHead;
    saveChanges(info);
  }
  //Target the active tab and currentWindow and return this as tabs
  //There is only going to be one so tabs[0] is the current page
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      from: 'popup',
      subject: 'DOMInfo'
    }, setDOMInfo);
  });
  // Set values / Event listeners
  document.getElementById('btn-copy').addEventListener('click', updateObj);
  document.getElementById('btn-clear').addEventListener('click', clearStore);
  // Global vars
  var theValue = document.getElementById('text-area').value,
    uniq = (new Date()).getTime(),
    messagesList = [],
    textAreaOutput = ''
  // For dev only really, take the contents of the text area (which will be the iframe)
  // Later on and add it the the messageList which is set to the value of textAreaOutput for now
  // Better name needed for this VAR
  function updateObj() {
    theValue = document.getElementById('text-area').value;
    messagesList.push({
      'value': theValue,
      'date': (new Date()).getTime()
    });
    textAreaOutput = JSON.stringify(messagesList);
    saveChanges();
  }
  // Add the value of messageList to chrome local store
  // run the function of LoadHTMLView to update the list for any new divs
  function saveChanges(emailInfo) {
    chrome.storage.local.set({
      'messagesList': JSON.stringify(messagesList)
    }, function() {
      loadHtmlView();
    });
  }
  // Load data from local store again when loaded run the function to rebuild the list of divs
  function loadChanges() {
    var theValue = [];
    chrome.storage.local.get({
      'messagesList': JSON.stringify(messagesList)
    }, function(results) {
      textAreaOutput = results.messagesList;
      messagesList = JSON.parse(results.messagesList);
      loadHtmlView();
    });
  }
  // Load data from local store when pop up opens
  loadChanges();
  // Simply remove all data from local store / not sure loadHTMLVIEW works here needs looking into
  // Todo: Make function accept params to either clear full list or clear one item
  function clearStore() {
    chrome.storage.local.clear();
    messagesList = [];
    loadHtmlView();
  }
  function deleteMessage() {
    // Get the ID from the wrapper (two levels up)
    var attribute = this.parentNode.parentNode.getAttribute("data-id");
    // console.log(attribute);
     messagesList.map(function(message, index) {
      if (message.date == attribute) {
        // delete message.date[attribute]
        messagesList.splice(index, 1);
        saveChanges();
        loadHtmlView();
      }
     });
  }
  // Takes the messagesList and build a HTML view based on the values
  function loadHtmlView() {
    document.getElementById('saved-message-output').innerHTML = " " // RESET
    messagesList.map(function(message) {

      var savedMessageItem   = document.createElement("div"),
          savedMessageTitle  = document.createElement("div"),
          savedMessageAction = document.createElement("div"),
          savedMessageActionBtn = document.createElement("button"),
          savedMessageActionDel = document.createElement("i"),
          // dateHuman = message.date.toUTCString(),
          textnode = document.createTextNode("Date: " + message.date);

      savedMessageItem.className = 'saved-message-item';
      savedMessageItem.dataset.id = message.date;
      savedMessageTitle.className = 'saved-message-title';
      savedMessageAction.className = 'saved-message-action';
      savedMessageActionBtn.className = 'btn btn-add';
      savedMessageActionBtn.innerHTML = 'Add email';
      savedMessageActionDel.className = 'fa fa-trash-o';

      savedMessageActionDel.addEventListener('click', deleteMessage, false);
      savedMessageItem.appendChild(savedMessageTitle);
      savedMessageItem.appendChild(savedMessageAction);
      savedMessageAction.appendChild(savedMessageActionBtn);
      savedMessageAction.appendChild(savedMessageActionDel);

      savedMessageTitle.appendChild(textnode);
      savedMessageTitle.appendChild(textnode);

      document.getElementById('saved-message-output').appendChild(savedMessageItem);
    });


  }

  //


});
