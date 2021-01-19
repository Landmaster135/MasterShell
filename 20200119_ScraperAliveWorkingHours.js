// code by utf-8

// Use Developer Tool（by F12）
var reader = new FileReader();
var array =  [`${[...document.querySelectorAll('span')][26].innerText}`, // 労働時間
              `${[...document.querySelectorAll('span')][27].innerText}`, // 時間外
              `${[...document.querySelectorAll('span')][28].innerText}`,// 休日
              `${[...document.querySelectorAll('span')][29].innerText}`,// 週40h超
              `${[...document.querySelectorAll('span')][30].innerText}`, // 深夜
              `${[...document.querySelectorAll('span')][25].innerText}` // 時間外計
             ];
var sep = "\t";
var data = ``;
array.forEach(function(value) {
    data += value;
    data += `${sep}`;
});

// This is it!
console.log(data);