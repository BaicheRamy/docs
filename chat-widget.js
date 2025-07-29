 ((function(){
  var loadWidget = function(){
  var script = "https://widget-service.emplorium.io/acc-3mp1o/init.js"
  var x = document.createElement('script');
  var sx = document.getElementsByTagName('script')[0];
  x.src = script; x.async = true;
  sx.parentNode.insertBefore(x,sx)
  

  fetch("https://auth-service.emplorium.io/widget-init-status", {
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