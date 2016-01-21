window.addEventListener('DOMContentLoaded', function() {
  var emailBody = [],
      emailHead = [],
      uniq = Math.floor(Date.now() / 1000),
      messagesList = [],
      textAreaOutput = ''

  function setDOMInfo(info) {
    emailHead = info[0];
    emailBody = info[1];
    saveChanges(info);
  }

  document.getElementById('btn-copy').addEventListener('click', updateObj);
  document.getElementById('btn-clear').addEventListener('click', clearStore);

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      from: 'popup',
      subject: 'DOMInfo'
    }, setDOMInfo);
  });

  function updateObj() {
    messagesList.push({
      'emailHead': emailHead,
      'emailBody': emailBody,
      'date': (new Date()).getTime()
    });
    textAreaOutput = JSON.stringify(messagesList);
    saveChanges();
  }

  function saveChanges(emailInfo) {
    chrome.storage.local.set({
      'messagesList': JSON.stringify(messagesList)
    }, function() {
      loadHtmlView();
    });
  }

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
  loadChanges();

  function clearStore() {
    chrome.storage.local.clear();
    messagesList = [];
    loadHtmlView();
  }
  function deleteMessage() {
    var attribute = this.parentNode.parentNode.getAttribute("data-id");
     messagesList.map(function(message, index) {
      if (message.date == attribute) {
        messagesList.splice(index, 1);
        saveChanges();
      }
     });
  }
  function addMessage() {
      var attribute = this.parentNode.parentNode.getAttribute("data-id");
       messagesList.map(function(message, index) {
        if (message.date == attribute) {
           chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        from: 'popup',
        subject: 'injectCode',
        emailHead: message.emailHead,
        emailBody: message.emailBody
      }, setDOMInfo);
    });
        }
       });
    }

  function loadHtmlView() {
    var savedMessageOutput = document.getElementById('saved-message-output');
    savedMessageOutput.innerHTML = " ";
    savedMessageOutput.className = 'saved-message-wrapper';

    if(!messagesList.length){
      savedMessageOutput.innerHTML = "No messages saved yet - Click the button above to save a message and it will be displayed here";
      savedMessageOutput.className += ' list-empty';
    } else {
      messagesList.map(function(message) {
      var savedMessageItem   = document.createElement("div"),
          savedMessageTitle  = document.createElement("div"),
          savedMessageTitleStart  = document.createElement("span"),
          savedMessageAction = document.createElement("div"),
          savedMessageActionBtn = document.createElement("button"),
          savedMessageActionDel = document.createElement("i"),
          dateHuman = new Date(message.date),
          dateHumanFormat = dateHuman.toUTCString().slice(0, -4),
          savedMessageTitleWord = document.createTextNode('Date: '),
          textnode = document.createTextNode(dateHumanFormat);

      savedMessageItem.className = 'saved-message-item';
      savedMessageItem.dataset.id = message.date;
      savedMessageTitle.className = 'saved-message-title';
      savedMessageTitleStart.className = 'date-title';
      savedMessageAction.className = 'saved-message-action';
      savedMessageActionBtn.className = 'btn btn-add';
      savedMessageActionBtn.innerHTML = 'Add email';
      savedMessageActionDel.className = 'fa fa-trash-o';

      savedMessageActionBtn.addEventListener('click', addMessage, false);
      savedMessageActionDel.addEventListener('click', deleteMessage, false);
      savedMessageItem.appendChild(savedMessageTitleStart);
      savedMessageItem.appendChild(savedMessageTitle);
      savedMessageItem.appendChild(savedMessageAction);
      savedMessageAction.appendChild(savedMessageActionBtn);
      savedMessageAction.appendChild(savedMessageActionDel);

      savedMessageTitle.appendChild(textnode);
      savedMessageTitleStart.appendChild(savedMessageTitleWord);
      savedMessageOutput.appendChild(savedMessageItem);
    });
    }
  }
});
