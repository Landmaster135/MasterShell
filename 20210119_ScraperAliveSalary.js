// code by utf-8

// Use Developer Tool（by F12）
// Before executing this script, select DOM by clicking（by Ctrl + Shift + C）.
var reader = new FileReader();
var array = [];
var length_of_year = '2020年'.length;

// var month = `${[...document.querySelectorAll('span')][0].innerText}`.substr(length_of_year,2);
// var erregular_months = ['06','09','10'];

// if (erregular_months.includes(month) == true){
if (`${[...document.querySelectorAll('span')][38].innerText}` != '' || `${[...document.querySelectorAll('span')][40].innerText}`){
    array = [`${[...document.querySelectorAll('span')][46].innerText}`, // 支給額合計
             `${[...document.querySelectorAll('span')][48].innerText}`, // 控除額合計
             `${[...document.querySelectorAll('span')][52].innerText}`, // 差引支給額
            ];
}else{
    array = [`${[...document.querySelectorAll('span')][42].innerText}`, // 支給額合計
             `${[...document.querySelectorAll('span')][44].innerText}`, // 控除額合計
             `${[...document.querySelectorAll('span')][48].innerText}`, // 差引支給額
            ];
}

var sep = "\t";
var data = ``;
array.forEach(function(value) {
    data += value;
    data += `${sep}`;
});

// This is it!
console.log(data);