
  // Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function() {
// Update the relevant fields with the new data
  function setDOMInfo(info) {
    document.getElementById('page-title').value = JSON.parse(info.divHtml);
    saveChanges(info);
  }

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
        from: 'popup',
        subject: 'DOMInfo'
      },setDOMInfo);
  });

  document.getElementById('text-area').addEventListener('keyup', saveChanges);

  function saveChanges(emailInfo) {
    var theValue = document.getElementById('text-area').value;

    // if (!theValue) {
    //   console.log('Error: No value specified');
    //   return;
    // }
    var id = 200;
    chrome.storage.local.set({
      'value' + id: theValue
    }, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
  }

  function loadChanges() {
    var theValue = [];
    chrome.storage.local.get({
      'value' + id: theValue
    }, function(results) {
      // console.log('Value = ' + results.value);
      document.getElementById('text-area').value = results.value200;
    });
  }
  loadChanges();
});




// by passing an object you can define default values e.g.: []
chrome.storage.local.get({
  userKeyIds: []
}, function (result) {
    // the input argument is ALWAYS an object containing the queried keys
    // so we select the key we need
    var userKeyIds = result.userKeyIds;
    userKeyIds.push({keyPairId: keyPairId, HasBeenUploadedYet: false});
    // set the new array value to the same key
    chrome.storage.local.set({userKeyIds: userKeyIds}, function () {
        // you can use strings instead of objects
        // if you don't  want to define default values
        chrome.storage.local.get('userKeyIds', function (result) {
            console.log(result.userKeyIds)
        });
    });
});
