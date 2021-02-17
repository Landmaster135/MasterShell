// code by utf-8

// Use this code in https://moneyforward.com/cf/summary
// Use Developer Tool（by ⌥⌘I）
// Before executing this script, select DOM by clicking（by Command + Shift + C）.
var reader = new FileReader();

var dict_expense_fixed_month = {'食費 合計': '', '日用品 合計': '', '水道・光熱費 合計': '', '通信費 合計': '', '住宅 合計': ''};
var dict_expense_fixed_year  = {'交通費 合計': '', '衣服・美容 合計': '', '健康・医療 合計': '', '特別な支出 合計': '', '税・社会保障 合計': ''};
var dict_expense_extra_month = {'趣味・娯楽 合計': '', '教養・教育 合計': ''};
var dict_expense_extra_year  = {'交際費 合計': '', '自動車 合計': '', '保険 合計': ''};
var dict_expense_others      = {'現金・カード 合計': '', 'その他 合計': '', '未分類 合計': ''};
var i = 0;

do {
    i = iCounter_and_pushDataInConditions(dict_expense_fixed_month, i);
    i = iCounter_and_pushDataInConditions(dict_expense_fixed_year , i);
    i = iCounter_and_pushDataInConditions(dict_expense_extra_month, i);
    i = iCounter_and_pushDataInConditions(dict_expense_extra_year , i);
    i = iCounter_and_pushDataInConditions(dict_expense_others     , i);
    i++;
}while(`${[...document.querySelectorAll('td')][i].innerText}` != '20');

// This is it!
console.log(outputTextFromArray(Object.values(dict_expense_fixed_month), "\n", "") + "\n" + 
            outputTextFromArray(Object.values(dict_expense_fixed_year), "\n", "") + "\n" + 
            outputTextFromArray(Object.values(dict_expense_extra_month), "\n", "") + "\n" + 
            outputTextFromArray(Object.values(dict_expense_extra_year), "\n", "") + "\n" + 
            outputTextFromArray(Object.values(dict_expense_others), "\n", "")
            )

function iCounter_and_pushDataInConditions(dictToPush1, i=0){
    var tdKey = `${[...document.querySelectorAll('td')][i].innerText}`;
    if (tdKey in dictToPush1 == true) {

        i++;
        dictToPush1[tdKey] = `${[...document.querySelectorAll('td')][i].innerText}`;

        dictToPush1[tdKey] = pullOutExcrescence(dictToPush1[tdKey]);
    }else{

    }
    return i;
}

function pullOutExcrescence(str_target) {
    var str_return;
    str_return = str_target.substr(0, str_target.indexOf("円")); // 円を抜く
    str_return = str_return.replace(/,/g, '');
    return str_return;
}

function outputTextFromArray(array_target, sep1, sep2) {
    var outputText = ``;
    var j = 0;
    array_target.forEach(function(value) {
        outputText += value;
        j++;
        if (j % array_target.length == 0) {
            outputText += `${sep2}`;
        }else{
            outputText += `${sep1}`;
        }
    });
    return outputText;
}