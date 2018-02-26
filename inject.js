"use strict";

var strToCopy = "";

function copyToClipboard(text) {
  // does not work inside frame
  if ((document.activeElement instanceof HTMLIFrameElement) ||
      (document.activeElement instanceof HTMLFrameElement)) {
    // need to call it twice :/
    document.activeElement.blur();
    document.activeElement.blur();
  }
  strToCopy = text;
  document.execCommand("copy");
}

function oncopy(event) {
  if (!strToCopy) {
    return;
  }

  // Hide the event from the page to prevent tampering.
  event.stopImmediatePropagation();

  // Overwrite the clipboard content.
  event.preventDefault();
  event.clipboardData.setData("text", strToCopy);
  strToCopy = "";
}

document.addEventListener("copy", oncopy, true);