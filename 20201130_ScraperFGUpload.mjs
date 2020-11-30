

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

// This statement can't be realized, too.
// var reader = new FileReader();
// array.forEach(function(value) {
//     console.log([...document.querySelectorAll('td')][value].innerText);
// });
// console.log(data[0],data[1],data[2],data[3],data[4],data[5]);

// This statement makes space.
// var reader = new FileReader();
// array.forEach(function(value) {
//     data.push([...document.querySelectorAll('td')][value].innerText);
// });
// half_length_of_data = 0
// var sep = ",";
// console.log(data[0+half_length_of_data], sep, data[1+half_length_of_data], sep, data[2+half_length_of_data], sep, data[3+half_length_of_data], sep, data[4+half_length_of_data], sep, data[5+half_length_of_data]);


// this statement can realize.
var reader = new FileReader();
var array = [338,324,326,328,334,330];
var info;
var data = [];
array.forEach(function(value) {
    data.push([...document.querySelectorAll('td')][value].innerText);
});
var length_of_data = 0
var sep = ",";
console.log(`${data[0+length_of_data]}${sep}${data[1+length_of_data]}${sep}${data[2+length_of_data]}${sep}${data[3+length_of_data]}${sep}${data[4+length_of_data]}${sep}${data[5+length_of_data]}`);

