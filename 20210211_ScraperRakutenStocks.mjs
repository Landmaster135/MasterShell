// code by utf-8

// Use Developer Tool（by ⌥⌘I）
// Before executing this script, select DOM by clicking（by Command + Shift + C）.
var array = [];

// ※　Webの描画によってdivの場所が変わるので、startNumを弄ること。
var rowNum               = 2;  // 読み込む行の数
var startNum_stockName   = 42; // 読み始め（銘柄名）
var startNum_stockAmount = 34; // 読み始め（銘柄名）
var i_row_stockName      = 15; // 一行下に遷移（銘柄名）
var i_row_stockAmount    = 12; // 一行下に遷移（金額）
var valueArray = [0];          // 読み込む値（読み始める列から数えたインデックス：td,nobr）

var str_base;
var str_valuation;
var str_income;
for (var i = 0; i < rowNum; i++) {
    valueArray.forEach (function(value) {
        str_base      = `${[...document.querySelectorAll('td')][startNum_stockName+i*i_row_stockName+value].innerText}`;
        str_valuation = `${[...document.querySelectorAll('nobr')][startNum_stockAmount+i*i_row_stockAmount+value].innerText}`;
        str_income    = `${[...document.querySelectorAll('nobr')][startNum_stockAmount+i*i_row_stockAmount+value+1].innerText}`;
        str_valuation = str_valuation.substr(0, str_valuation.indexOf(" 円")); // 円を抜く
        str_income    = str_income.substr(0, str_income.indexOf(" 円")); // 円を抜く
        str_valuation = str_valuation.replace(/,/g, '');
        str_income    = str_income.replace(/,/g, '');
        array.push(str_base + "\t" + String(Number(str_valuation) - Number(str_income)) + "\t" + String(Number(str_income)));
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
