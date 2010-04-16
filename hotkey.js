/**
 * Narsimham's Hotkey Plugin
 * 
 * Detect and take action when a key is pressed. To add hotkeys to your page, modify the
 * keyPressed function below as needed.
 *
 * Tested (and working) in IE 8.0, Firefox 3.5, Chrome 4.0 and Opera 10.10.
 *
 * Ack: http://lotgd.net/
 */

(function() {

var keyPress = function(event) {
  if(!event) {
    // make IE keypress events look like FF keypress events
    event = window.event;
    event.charCode = event.keyCode;
    event.target = event.srcElement;
  } else if(window.opera) {
    // make Opera keypress events look like FF keypress events
    event.charCode = event.keyCode;
  }

  var target = event.target.nodeName.toUpperCase();
  if(target == 'INPUT' || target == 'TEXTAREA' || event.altKey || event.ctrlKey || event.metaKey) {
    return true;
  }

  var c = String.fromCharCode(event.charCode);
  keyPressed(c);

  return true;
};

var keyPressed = function(c) {
  c = c.toUpperCase();
  switch(c) {
  case 'H':
    alert('Hello world');
    break;
  default:
    break;
  }
};

document.onkeypress = keyPress;

})();

