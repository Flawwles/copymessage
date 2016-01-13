// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function() {
  // Update the relevant fields with the new data
  function setDOMInfo(info) {
    document.getElementById('text-area').value = info[0];
    document.getElementById('text-area-body').value = info[1];
    saveChanges(info);
  }

  // Set values / Event listeners
  document.getElementById('btn-copy').addEventListener('click', updateObj);
  document.getElementById('btn-inject').addEventListener('click', injectCode);
  document.getElementById('btn-clear').addEventListener('click', clearStore);
  // Global vars
  var theValue = document.getElementById('text-area').value,
    uniq = (new Date()).getTime(),
    messagesList = [],
    textAreaOutput = ''
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

chrome.tabs.executeScript(tabId, {
  code: 'angular.element(document.body).injector().get(\'contentManager\').getGlobalBlockStyles(\'data-block-panel\').width;'
}, function(results) {
  console.log('Got Results:', results);
})
   function injectCode() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        from: 'popup',
        subject: 'injectCode',
        emailHead: '<head><meta content="text/html; charset=utf-8" http-equiv="Content-Type"><meta content="width=device-width, initial-scale=1.0" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><meta name="editor" content="DRAGANDDROP"><meta name="version" content="1.3.8"><style id="p3-base-style">/* @id fixes *//* @section global */body{margin: 0px;padding: 0px;width: 100% !important;-webkit-text-size-adjust: none;-ms-text-size-adjust: 100%;}/* @section text */p{margin: 0px;padding: 0px;}/* @section tables */table{mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0px auto !important;}/* @section table-content */table td{padding: 0px;border-collapse: separate;}/* @section images */img{outline: none;text-decoration: none;border: none;}/* @id responsive *//* @section sm-container */@media screen and (max-width: 600px){*[class].container,*[class].container-padding{width: 100% !important;}}/* @section sm-col */@media screen and (max-width: 600px){[data-block-column="column"]{width: 100% !important;box-sizing: border-box;display: block !important;}}/* @section sm-img */@media screen and (max-width: 600px){[data-block-column="column"] img{max-width: 100% !important;width: auto !important;height: auto !important;}}/* @section sm-hide */@media screen and (max-width: 600px){*[class].hide{display: none !important;}}</style><style id="p3-global-style">/* @id body *//* @section background */body{background-color: #E8E8E8;background-image: none;}/* @id h1 *//* @section text */h1{font-size: 26px;color: #000001;font-family: Arial, Helvetica, sans-serif;line-height: normal;font-weight: bold;font-style: normal;text-decoration: none;margin-top: 0px;margin-right: 0px;margin-bottom: 10px;margin-left: 0px;}/* @id h2 *//* @section text */h2{font-size: 20px;color: #000001;font-family: Arial, Helvetica, sans-serif;line-height: normal;font-weight: bold;font-style: normal;text-decoration: none;margin-top: 0px;margin-right: 0px;margin-bottom: 10px;margin-left: 0px;}/* @id h3 *//* @section text */h3{font-size: 15px;color: #000001;font-family: Arial, Helvetica, sans-serif;line-height: normal;font-weight: bold;font-style: normal;text-decoration: none;margin-top: 0px;margin-right: 0px;margin-bottom: 10px;margin-left: 0px;}/* @id links *//* @section text */a,h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color: #0000ee;background-color: none;border: none;text-decoration: underline;font-style: normal;font-weight: normal;word-wrap: break-word;}</style><style id="p3-global-block-style">/* @id data-block-background *//* @section default */[data-block-background]{margin: 0px;padding: 0px;width: 100%;line-height: 100%;}/* @id data-block-panel *//* @section border */[data-block-panel="full-width"] > td,[data-block-panel="coloured"] .container > tbody > tr > td,[data-block-panel="clear"] .container > tbody > tr > td,[data-block-panel="grid"] [data-block-column="column"]{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;}/* @section padding */[data-block-panel="full-width"] > td,[data-block-panel="coloured"] .container > tbody > tr > td,[data-block-panel="clear"] .container > tbody > tr > td,[data-block-panel="grid"] [data-block-column="column"]{padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px;}/* @section width */[data-block-panel] .container{width: 700px;}/* @section background */[data-block-panel="full-width"] > td,[data-block-panel="coloured"] .container,[data-block-panel="grid"] [data-block-column="column"]{background-color: #ffffff;}/* @id data-block-panel="grid" *//* @section media-padding-column */@media only screen and (max-width: 480px){[data-block-panel="grid"] [data-block-column="padding"]{display: block !important;width: 100% !important;}}/* @id data-block-row="row" *//* @section border */[data-block-row="row"] .container-padding{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;}/* @section padding */[data-block-row="row"] .container-padding{padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;}/* @section background */[data-block-row="row"] .container-padding{background-color: transparent;}/* @id data-block-column="column" *//* @section border */[data-block-column="column"]{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;}/* @section padding */[data-block-column="column"]{padding-top: 10px;padding-right: 10px;padding-bottom: 0px;padding-left: 10px;}/* @section background */[data-block-column="column"]{background-color: transparent;}/* @section align */[data-block-column="column"]{vertical-align: top;}/* @section content */[data-block-column="column"]{font-weight: normal;}/* @id data-block-column="padding" *//* @section default */[data-block-column="padding"]{width: 10px;height: 10px;font-size: 1px;line-height: 1;}/* @section media */@media only screen and (max-width: 480px){[data-block-column="padding"]{display: none !important;}}/* @id data-block-content="text" *//* @section background */[data-block-content="text"] > td{background-color: transparent;}/* @section border */[data-block-content="text"] > td{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;}/* @section padding */[data-block-content="text"] > td{padding-top: 0px;padding-right: 0px;padding-bottom: 10px;padding-left: 0px;}/* @section text */[data-block-content="text"] td,[data-block-content="text"] td > p{text-align: left;font-family: Arial, Helvetica, sans-serif;font-size: 13px;color: #000001;font-weight: normal;font-style: normal;line-height: normal;text-decoration: none;}/* @id data-block-content="divider" *//* @section background */[data-block-content="divider"]{background-color: transparent;}/* @section border */[data-block-content="divider"] > td{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;}/* @section padding */[data-block-content="divider"] > td{padding-top: 0px;padding-right: 0px;padding-bottom: 10px;padding-left: 0px;}/* @section content-height */[data-block-content="divider"] .divider-content{font-size: 1px;line-height: 1;height: 1px;}/* @section helper-height */[data-block-content="divider"] .divider-helper{font-size: 1px;line-height: 1;}/* @section content */[data-block-content="divider"] .divider-content{border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #000000;padding-top: 10px;}/* @section helper */[data-block-content="divider"] .divider-helper{padding-bottom: 10px;}/* @id data-block-content="spacer" *//* @section background */[data-block-content="spacer"]{background-color: transparent;}/* @section border */[data-block-content="spacer"] > td{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;}/* @section padding */[data-block-content="spacer"] > td{padding-top: 0px;padding-bottom: 10px;}/* @section content */[data-block-content="spacer"] .spacer-content{font-size: 1px;line-height: 1;height: 1px;padding-top: 10px;}/* @section helper */[data-block-content="divider"] .divider-helper{padding-bottom: 10px;}/* @id data-block-content="button" *//* @section background */[data-block-content="button"] table td{background-color: #505050;}/* @section border */[data-block-content="button"] table td{border-top-width: 1px;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #353535;border-right-color: #353535;border-bottom-color: #353535;border-left-color: #353535;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;}/* @section text */[data-block-content="button"] table td,[data-block-content="button"] table td > a,[data-block-content="button"] table td > span{color: #FFFFFE;font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight: normal;font-style: normal;line-height: normal;text-decoration: none;text-align: center;display: block;}/* @section padding-extra */[data-block-content="button"] > td{padding-top: 0px;padding-left: 0px;padding-bottom: 10px;padding-right: 0px;}/* @section padding */[data-block-content="button"] table td{padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px;}/* @id data-block-content="preview-text" *//* @section mobile */@media only screen and (max-width: 480px){[data-block-content="preview-text"]{display: block;}}/* @id data-block-content="image" *//* @section background */[data-block-content="image"] > td{background-color: transparent;}/* @section border */[data-block-content="image"] > td{border-top-width: 0px;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #000000;border-right-color: #000000;border-bottom-color: #000000;border-left-color: #000000;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;}/* @section padding */[data-block-content="image"] > td{padding-top: 0px;padding-right: 0px;padding-bottom: 10px;padding-left: 0px;}/* @section align */[data-block-content="image"] td{text-align: center;}/* @section max-width */[data-block-content="image"] img{max-width: 100%;}/* @section link */[data-block-content="image"] > td > a{display: block;outline: none;border: none;text-decoration: none;}/* @id data-block-content="image-placeholder" *//* @section style */[data-block-content="image-placeholder"] td{max-width: 100%;background-image: url(/public/editor/placeholder-image-icon-dcf815f9.png);background-repeat: no-repeat;background-position: center;background-color: #101d29;width: 100%;padding-top: 50%;padding-left: 0px;padding-right: 0px;padding-bottom: 0px;}/* @id data-block-content="placeholder" *//* @section placeholder */[data-block-content="placeholder"] td{height: 80px;border-width: 1px;border-style: solid;border-color: #dfe2e6;background-color: rgba(255, 255, 255, 0.95);text-align: center;font-size: 14px;font-family: Arial, Helvetica, sans-serif;transition: color 0.1s ease-in-out;}/* @section hover */[data-block-content="placeholder"].block-dragged-on td{color: #3c9e9e;}</style><style id="p3-canvas-style">/* @id canvas *//* @section tables */table{table-layout: fixed;}</style><style id="p3-block-style">/* @id block-342178 *//* @extends data-block-panel *//* @section padding */[data-block-id="block-342178"][data-block-panel="full-width"] > td,[data-block-id="block-342178"][data-block-panel="coloured"] .container > tbody > tr > td,[data-block-id="block-342178"][data-block-panel="clear"] .container > tbody > tr > td,[data-block-id="block-342178"][data-block-panel="grid"] [data-block-column="column"]{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}/* @id block-863355 *//* @extends data-block-column="column" *//* @section padding */[data-block-id="block-863355"][data-block-column="column"]{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}/* @id block-496391 *//* @extends data-block-content="text" *//* @section text */[data-block-id="block-496391"][data-block-content="text"] td,[data-block-id="block-496391"][data-block-content="text"] td > p{font-size: 10px;text-align: center;}/* @id block-939002 *//* @extends data-block-panel *//* @section padding */[data-block-id="block-939002"][data-block-panel="full-width"] > td,[data-block-id="block-939002"][data-block-panel="coloured"] .container > tbody > tr > td,[data-block-id="block-939002"][data-block-panel="clear"] .container > tbody > tr > td,[data-block-id="block-939002"][data-block-panel="grid"] [data-block-column="column"]{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}/* @id block-851086 *//* @extends data-block-column="column" *//* @section padding */[data-block-id="block-851086"][data-block-column="column"]{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}/* @id block-679126 *//* @extends data-block-content="text" *//* @section text */[data-block-id="block-679126"][data-block-content="text"] td,[data-block-id="block-679126"][data-block-content="text"] td > p{font-size: 10px;text-align: left;}</style><style type="text/css"></style><style type="text/css"></style></head>',
        emailBody: '<body><table border="0" cellpadding="0" cellspacing="0" data-block-background="background" data-block-id="space"><tbody><tr data-block-panel="clear" class="hide" data-block-id="block-621604"><td><table cellpadding="0" cellspacing="0" border="0" align="center" class="container" width="680"><tbody><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center" width="100%"><tbody data-block-body=""><tr data-block-row="row" data-block-id="block-563114"><td class="container-padding" valign="top" width="680"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><th valign="top" data-block-column="column" data-block-id="block-905679" width="660"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr data-block-content="text" data-block-id="block-432990"><td valign="top"><p><i>Write a pre-header to describe the content of your message</i></p><p>Having problems viewing this email? <a href="http://{~customDomain~}/interface/external_view_email.php?{~mailId~}&amp;varId={~mailVariationId~}" target="_blank">View in browser</a>.</p></td></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr data-block-panel="clear" data-block-id="block-984814"><td><table cellpadding="0" cellspacing="0" border="0" align="center" class="container" width="680"><tbody><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center" width="100%"><tbody data-block-body=""><tr data-block-row="row" data-block-id="block-841168"><td class="container-padding" valign="top" align="center" width="680"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><th valign="top" data-block-column="column" data-block-id="block-351283" width="660"><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center"><tbody><tr data-block-content="image-placeholder" data-block-id="block-121071"><td valign="top"></td></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr data-block-panel="grid" data-block-id="block-194240"><td><table cellpadding="0" cellspacing="0" border="0" align="center" class="container" width="680"><tbody><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center" width="100%"><tbody data-block-body=""><tr data-block-row="row" data-block-id="block-866984"><td class="container-padding" valign="top" align="center" width="680"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><th valign="top" data-block-column="column" data-block-id="block-329989" width="315"><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center"><tbody><tr data-block-content="image-placeholder" data-block-id="block-641399"><td valign="top"></td></tr><tr data-block-content="text" data-block-id="block-970352"><td valign="top"><p>Your text goes here. Double click to edit this text.</p><br><p>By highlighting a section of text you are able to apply styles such as <b>bold</b>, <i>italic</i> and<strike> strikethrough</strike>.</p></td></tr><tr data-block-content="button" data-block-id="block-271110"><td valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" valign="middle"><a href=""><span>More info</span></a></td></tr></tbody></table></td></tr></tbody></table></th><th data-block-column="padding" width="10" data-block-id="block-695045">&nbsp;</th><th valign="top" data-block-column="column" data-block-id="block-942304" width="315"><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center"><tbody><tr data-block-content="image-placeholder" data-block-id="block-113501"><td valign="top"></td></tr><tr data-block-content="text" data-block-id="block-726830"><td valign="top"><p>Your text goes here. Double click to edit this text.</p><br><p>By highlighting a section of text you are able to apply styles such as <b>bold</b>, <i>italic</i> and<strike> strikethrough</strike>.</p></td></tr><tr data-block-content="button" data-block-id="block-457589"><td valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" valign="middle"><a href=""><span>More info</span></a></td></tr></tbody></table></td></tr></tbody></table></th></tr></tbody></table></td></tr><tr data-block-row="row" data-block-id="block-648132"><td class="container-padding" valign="top" align="center" width="680"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><th valign="top" data-block-column="column" data-block-id="block-896927" width="315"><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center"><tbody><tr data-block-content="image-placeholder" data-block-id="block-232392"><td valign="top"></td></tr><tr data-block-content="text" data-block-id="block-425380"><td valign="top"><p>Your text goes here. Double click to edit this text.</p><br><p>By highlighting a section of text you are able to apply styles such as <b>bold</b>, <i>italic</i> and<strike> strikethrough</strike>.</p></td></tr><tr data-block-content="button" data-block-id="block-426767"><td valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" valign="middle"><a href=""><span>More info</span></a></td></tr></tbody></table></td></tr></tbody></table></th><th data-block-column="padding" width="10" data-block-id="block-482535">&nbsp;</th><th valign="top" data-block-column="column" data-block-id="block-287906" width="315"><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center"><tbody><tr data-block-content="image-placeholder" data-block-id="block-312898"><td valign="top"></td></tr><tr data-block-content="text" data-block-id="block-914642"><td valign="top"><p>Your text goes here. Double click to edit this text.</p><br><p>By highlighting a section of text you are able to apply styles such as <b>bold</b>, <i>italic</i> and<strike> strikethrough</strike>.</p></td></tr><tr data-block-content="button" data-block-id="block-949792"><td valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" valign="middle"><a href=""><span>More info</span></a></td></tr></tbody></table></td></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr data-block-panel="clear" data-block-id="block-653519"><td><table cellpadding="0" cellspacing="0" border="0" align="center" class="container" width="680"><tbody><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center" width="100%"><tbody data-block-body=""><tr data-block-row="row" data-block-id="block-946987"><td class="container-padding" valign="top" width="680"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><th valign="top" data-block-column="column" data-block-id="block-951808" width="660"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr data-block-content="text" data-block-id="block-641670"><td valign="top"><p>If you liked the content of this email <a href="http://{~customDomain~}/_act/get_send_to_friend.php?{~mailId~}&amp;varId={~mailVariationId~}" target="_blank">send it to a friend</a>.</p><p><br></p><p><i>[Registered company name]</i></p><p><i>[Registered company address]</i></p><p><i>[Company registration number]</i></p><p><i>[VAT number (optional)]</i></p><p><i><br></i></p><p>If you no longer wish to receive emails, <a href="http://{~customDomain~}/_act/get_rcr.php?{~mailId~}" target="_blank">click here</a>.</p></td></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body>'
      }, setDOMInfo);
    });
    }

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
