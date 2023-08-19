document.addEventListener("DOMContentLoaded", function () {
  const getTabTitleButton = document.getElementById("getTabTitleButton");
  const tabTitleElement = document.getElementById("tabTitle");

  getTabTitleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      const tabTitle = currentTab.title;
      tabTitleElement.textContent = tabTitle;
    });
  });
});
