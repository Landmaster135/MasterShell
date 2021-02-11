// code by utf-8

// Use Developer Tool（by ⌥⌘I）
// Before executing this script, select DOM by clicking（by Command + Shift + C）.
var reader = new FileReader();
var array = [];

// ※　Webの描画によってdivの場所が変わるので、startNumを弄ること。
var rowNum = 2;    // 読み込む行の数
var startNum = 29; // 読み始め（銘柄名）
var i_row = 17;     // 一行下に遷移
var valueArray = [0]; // 読み込む値（読み始める列から数えたインデックス：td,nobr）

var str_name;
var str_valuation;
var str_income;
var str_quantity;
var str_yen_per_dollars = `${[...document.querySelectorAll('nobr')][60].innerText}`;
str_yen_per_dollars = str_yen_per_dollars.substr(0, str_yen_per_dollars.indexOf(" 円")); // 円を抜く
var valueDict = { name:0, valuation:5, income:7, quantity:4}; // {銘柄名, 平均取得価額, 現在値, 保有数量}
for (var i = 0; i < rowNum; i++) {
    valueArray.forEach (function(value) {
        str_name      = `${[...document.querySelectorAll('td')][startNum+i*i_row+valueDict['name']].innerText}`;
        str_name      = str_name.replace(/\t/g, '');
        str_valuation = `${[...document.querySelectorAll('td')][startNum+i*i_row+valueDict['valuation']].innerText}`;
        str_income    = `${[...document.querySelectorAll('td')][startNum+i*i_row+valueDict['income']].innerText}`;
        str_quantity  = `${[...document.querySelectorAll('td')][startNum+i*i_row+valueDict['quantity']].innerText}`;

        array.push(str_name + "\t" + String((Number(str_valuation) * Number(str_quantity)) * Number(str_yen_per_dollars)) + "\t" + String(((Number(str_income) - Number(str_valuation)) * Number(str_quantity))) * Number(str_yen_per_dollars));
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
