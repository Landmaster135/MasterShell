// code by utf-8

// Use Developer Tool（by F12）
// Before executing this script, select DOM by clicking（by Ctrl + Shift + C）.
var reader = new FileReader();
var array = [];
var length_of_year = '2020年'.length;

// ※　Webの描画によってdivの場所が変わるので、startNumを弄ること。
var startNum = 351; // 読み始め
var rowNum = 35;    // 読み込む行の数
var i_row = 13;     // 一行下に遷移
var valueArray = [2,1,0,3]; // 読み込む値（読み始める列から数えたインデックス）
for (var i = 0; i < rowNum; i++) {
    valueArray.forEach (function(value) {
        array.push(`${[...document.querySelectorAll('div')][startNum+i*i_row+value*2].outerText}`) // 名前、親Business Unit、事業者、子
    });
}

// 参考
// array = [`${[...document.querySelectorAll('div')][351].outerText}`,
//         `${[...document.querySelectorAll('div')][353].outerText}`,
//         `${[...document.querySelectorAll('div')][355].outerText}`,
//         `${[...document.querySelectorAll('div')][357].outerText}`
//         ];

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