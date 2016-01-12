// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function() {
  // Update the relevant fields with the new data
  function setDOMInfo(info) {
    // document.getElementById('page-title').value = JSON.parse(info.divHtml);
    saveChanges(info);
  }
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
  // document.getElementById('text-area').addEventListener('keyup', updateObj);
  document.getElementById('btn-clear').addEventListener('click', clearStore);
  document.getElementById('date').value = uniq;
  // Global vars
 var theValue = document.getElementById('text-area').value,
     theDate = document.getElementById('date').value,
     uniq = (new Date()).getTime(),
     messagesList = [];

function updateObj(){
    theValue = document.getElementById('text-area').value;
    messagesList.push({'value' : theValue, 'date' : uniq});
    saveChanges();
}


function saveChanges(emailInfo) {

    chrome.storage.local.set({
      'messagesList': JSON.stringify(messagesList)
    }, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
  }

  function loadChanges() {
    var theValue = [];
    chrome.storage.local.get({
      'messagesList': JSON.stringify(messagesList)
    }, function(results) {
      // console.log('Value = ' + results.value);
      document.getElementById('text-area-output').value = results.messagesList;
    });
  }
  loadChanges();

  function clearStore() {
    chrome.storage.local.clear();
  }

});
