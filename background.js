// Switch Last Tab
let lastTabId = null;
let currentTabId = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
  lastTabId = currentTabId;
  currentTabId = activeInfo.tabId;
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "switch-last-tab" && lastTabId !== null) {
    chrome.tabs.update(lastTabId, { active: true }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error switching tabs:", chrome.runtime.lastError);
      }
    });
  }
});
