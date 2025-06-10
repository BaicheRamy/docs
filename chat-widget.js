
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


// hideAssistant.js
document.addEventListener('DOMContentLoaded', () => {
  // List of selectors to hide/remove
  const selectors = [
    'button#assistant-entry',           // chat launcher button
    '.mint-ai-assistant',              // assistant container
    '.mint-chat-widget'                // chat UI pane
  ];

  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) {
      el.style.setProperty('display', 'none', 'important');
      // or el.remove();
    }
  });
});
