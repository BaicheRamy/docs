
  ((function(){
  var loadWidget = function(){
  var script = "https://widget-service-dev.emplorium.io/acc-3mp1o/init.js"
  var x = document.createElement('script');
  var sx = document.getElementsByTagName('script')[0];
  x.src = script; x.async = true;
  sx.parentNode.insertBefore(x,sx)
  

  fetch("https://auth-service-dev.emplorium.io/widget-init-status", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ accountID: "3mp1o" })
  }).catch(function(error) {
    console.error('Widget installation status update failed:', error);
  });
  }
  if(document.readyState==="complete"){
  loadWidget();
  } else if (window.addEventListener){
  window.addEventListener('load',loadWidget,false)
  } else if (window.attachEvent) {
  window.attachEvent("onload",loadWidget)
  }
  })())


// docs/hideAssistant.js
document.addEventListener("DOMContentLoaded", () => {
  function removeAssistant() {
    const selectors = [
      '#assistant-entry',         // chat launcher button
      'button#assistant-entry',   // alternative selector
      '.mint-ai-assistant',       // assistant wrapper
      '.mint-chat-widget'         // chat pane
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  }
  
  // Remove on page load
  removeAssistant();

  // Also observe for elements added later (e.g., dynamic mounts)
  const observer = new MutationObserver(removeAssistant);
  observer.observe(document.body, { childList: true, subtree: true });
});

