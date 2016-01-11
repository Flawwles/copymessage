
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
    chrome.storage.local.set({
      'value': theValue
    }, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
  }

  function loadChanges() {
    var theValue = [];
    chrome.storage.local.get({
      'value': theValue
    }, function(results) {
      // console.log('Value = ' + results.value);
      document.getElementById('text-area').value = results.value;
    });
  }
  loadChanges();
});

