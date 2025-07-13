// background.js (for Manifest V3)
chrome.action.onClicked.addListener(async (tab) => {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  
  // background.js (for Manifest V2)
  // chrome.browserAction.onClicked.addListener(function(tab) {
  //   chrome.tabs.executeScript(tab.id, { file: 'content.js' });
  // });