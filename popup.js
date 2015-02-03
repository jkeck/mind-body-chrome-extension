document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.executeScript(null, {file: "lookup-duplicates.js"}, function(returnText){
    document.getElementById("status").innerHTML = returnText;
  });
});
