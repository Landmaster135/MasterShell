// select tag to select area.
var target = [...document.querySelectorAll('p')][3];
// select area to copy text.
document.getSelection().selectAllChildren(target);
// copy text to get information.
document.execCommand("copy");
// cancel area selection.
document.getSelection().empty(target);