chrome.runtime.onInstalled.addListener(function() {
	console.log("hello wworlds");
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Add task to getShitDone Tasklist",
      "contexts": ["selection"]
    });
  });