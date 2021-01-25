// code by utf-8

// Use Developer Tool（by ⌥⌘I）
// Before executing this script, select DOM by clicking（by Command + Shift + C）.
var reader = new FileReader();
var array = [];

// ※　Webの描画によってdivの場所が変わるので、startNumを弄ること。
var startNum_a = 29;  // 読み始め（a）
var startNum_font = 6 // 読み始め（font）
var rowNum = 2;       // 読み込む行の数
var i_row_a;          // 一行下に遷移
var displayedCountry = `${[...document.querySelectorAll('span')][0].innerText}`; // 表示中の国
// 国によって取引の種類の数が違うため、条件分岐させる。
if (displayedCountry == '米国') {
    i_row_a = 4;
} else if (displayedCountry == '中国') {
    i_row_a = 3;
}
var i_row_font = 10;     // 一行下に遷移
var valueArray = [0,4]; // 読み込む値（読み始める列から数えたインデックス：[aとfont,font]）

var str_stock_name; // 銘柄名
var str_acquisition_amount; // 取得金額
var str_valuation_gain; // 評価損益
for (var i = 0; i < rowNum; i++) {
    valueArray.forEach (function(value) {
        if (value == 0) {
            str_stock_name = `${[...document.querySelectorAll('a')][startNum_a+i*i_row_a+value].innerText}`;
            str_acquisition_amount = `${[...document.querySelectorAll('font')][startNum_font+i*i_row_font+value].innerText}`;
            array.push(str_stock_name + "\t" + str_acquisition_amount.replace(/,/g, '').replace('円', ''));
        }else if (value == 4){
            str_valuation_gain = `${[...document.querySelectorAll('font')][startNum_font+i*i_row_font+value].innerText}`;
            array.push(str_valuation_gain.replace(/,/g, '').replace('円', ''));
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

