

var array = [324,326,328,330,334,338];
var info;
var data = [];

// This statement can't be realized.
// array.forEach(function(value) {
       // select tag to select area.
//     document.getSelection().selectAllChildren([...document.querySelectorAll('td')][value]);
//     info = document.execCommand("copy");
//     data.push(info);
// });
// console.log(data);

array.forEach(function(value) {
    console.log([...document.querySelectorAll('td')][value].value);
});
console.log(data);

// select area to copy text.
document.getSelection().selectAllChildren(data);
// copy text to get information.
document.execCommand("copy");
// cancel area selection.
document.getSelection().empty(target);

