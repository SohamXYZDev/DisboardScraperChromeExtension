// content.js
(function() {
    const searchTag = 'button button-join is-discord';
    const elements = document.querySelectorAll(searchTag);
    const sources = [];
  
    elements.forEach(element => {
      const srcValue = element.getAttribute('src');
      if (srcValue) {
        sources.push(srcValue);
      }
    });
  
    if (sources.length > 0) {
      console.log("Found 'src' values for elements with class " + searchTag + ":");
      sources.forEach(src => {
        console.log(src);
      });
      // You can also send these sources to the background script or display them on the page
      // For example, to send to background script:
      // chrome.runtime.sendMessage({ action: "foundSources", data: sources });
    } else {
      console.log("No elements found with class 'button button-join is-discord' or they don't have a 'src' attribute.");
    }
})();