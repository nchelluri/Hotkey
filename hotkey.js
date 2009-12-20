/**
 * Narsa's Hotkey Plugin
 * 
 * Detect and take action when a key is pressed. To add hotkeys to your page, modify the
 * keyPressed function below as needed.
 *
 * Tested (and working) in IE 8.0, Firefox 3.5, Chrome 4.0 and Opera 10.10.
 *
 * Acknowledgement: I looked at the source code for the very nice Legend of the Green Dragon
 * (http://lotgd.net/) keypress functionality while writing this, as well as a number of
 * references to see the difference in implementation between browsers.
 *
 * Mostly just putting this out there because I wanted to figure out how to make hotkeys
 * work in JavaScript and because I created a github account today and wanted to stick
 * something in there. :)
 */

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
