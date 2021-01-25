// code by utf-8

// Use Developer Tool（by ⌥⌘I）
// Before executing this script, select DOM by clicking（by Command + Shift + C）.
var reader = new FileReader();
var array = [];

// ※　Webの描画によってdivの場所が変わるので、startNumを弄ること。
var startNum = 46; // 読み始め
var rowNum = 11;    // 読み込む行の数
var i_row = 7;     // 一行下に遷移
var valueArray = [0,3]; // 読み込む値（読み始める列から数えたインデックス）

var str_base;
var str_before;
var str_after;
for (var i = 0; i < rowNum; i++) {
    valueArray.forEach (function(value) {
        str_base = `${[...document.querySelectorAll('td')][startNum+i*i_row+value].innerText}`;
        if (value == 0) {
            array.push(str_base.substr(0, str_base.indexOf("\n"))); // 改行文字の前の値
            console.log("0");
        }else if (value == 3){
            str_before = str_base.substr(0, str_base.indexOf("\n")); // 改行文字の前の数値
            str_after  = str_base.substr(str_base.indexOf("\n") + 1, str_base.length - str_base.indexOf("\n")); // 改行文字の後の数値
            str_before = str_before.replace(/,/g, '');
            str_after  = str_after.replace(/,/g, '');
            array.push(str_before.replace(',', '') + "\t" + String(Number(str_after) - Number(str_before)));
        }
    });
}

var sep1 = "\t";
var sep2 = "\n";
var data = ``;
i = 0;
array.forEach(function(value) {
    data += value;
    i++;
    if (i % valueArray.length == 0) {
        data += `${sep2}`;
    }else{
        data += `${sep1}`;
    }
});

// This is it!
console.log(data);
