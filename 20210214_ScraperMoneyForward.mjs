// code by utf-8

// Use this code in https://moneyforward.com/cf/summary
// Use Developer Tool（by ⌥⌘I）
// Before executing this script, select DOM by clicking（by Command + Shift + C）.
var reader = new FileReader();

var array_expense_fixed_month = ['食費 合計', '日用品 合計', '水道・光熱費 合計', '通信費 合計', '住宅 合計'];
var array_expense_fixed_year  = ['交通費 合計', '衣服・美容 合計', '健康・医療 合計', '特別な支出 合計', '税・社会保障 合計'];
var array_expense_extra_month = ['趣味・娯楽 合計', '教養・教育 合計'];
var array_expense_extra_year  = ['交際費 合計', '自動車 合計', '保険 合計'];
var array_expense_others      = ['現金・カード 合計', 'その他 合計', '未分類 合計'];
var str_expense;
var array_result_fixed_month_category = [];
var array_result_fixed_year_category  = [];
var array_result_extra_month_category = [];
var array_result_extra_year_category  = [];
var array_result_others_category      = [];
var array_result_fixed_month = [];
var array_result_fixed_year  = [];
var array_result_extra_month = [];
var array_result_extra_year  = [];
var array_result_others      = [];

var i = 0;

do {
    i = iCounter_and_pushDataInConditions(array_expense_fixed_month, array_result_fixed_month_category, array_result_fixed_month, i);
    i = iCounter_and_pushDataInConditions(array_expense_fixed_year , array_result_fixed_year_category , array_result_fixed_year, i);
    i = iCounter_and_pushDataInConditions(array_expense_extra_month, array_result_extra_month_category, array_result_extra_month, i);
    i = iCounter_and_pushDataInConditions(array_expense_extra_year , array_result_extra_year_category , array_result_extra_year, i);
    i = iCounter_and_pushDataInConditions(array_expense_others     , array_result_others_category     , array_result_others, i);
    i++;
}while(`${[...document.querySelectorAll('td')][i].innerText}` != '20');

// This is it!
console.log(outputTextFromArray(array_result_fixed_month_category, "\t", ""));
console.log(outputTextFromArray(array_result_fixed_month, "\n", ""));
console.log(outputTextFromArray(array_result_fixed_year_category, "\t", ""));
console.log(outputTextFromArray(array_result_fixed_year, "\n", ""));
console.log(outputTextFromArray(array_result_extra_month_category, "\t", ""));
console.log(outputTextFromArray(array_result_extra_month, "\n", ""));
console.log(outputTextFromArray(array_result_extra_year_category, "\t", ""));
console.log(outputTextFromArray(array_result_extra_year, "\n", ""));
console.log(outputTextFromArray(array_result_others_category, "\t", ""));
console.log(outputTextFromArray(array_result_others, "\n", ""));

function pullOutExcrescence(str_target) {
    var str_return;
    str_return = str_target.substr(0, str_target.indexOf("円")); // 円を抜く
    str_return = str_return.replace(/,/g, '');
    return str_return;
}

function iCounter_and_pushDataInConditions(arrayCondition, arrayToPush1, arrayToPush2, i=0){
    var str_expense;
    if (arrayCondition.includes(`${[...document.querySelectorAll('td')][i].innerText}`) == true) {
        arrayToPush1.push(`${[...document.querySelectorAll('td')][i].innerText}`);
        i++;
        str_expense = `${[...document.querySelectorAll('td')][i].innerText}`;
        str_expense = pullOutExcrescence(str_expense);
        arrayToPush2.push(str_expense);
    }else{

    }
    return i;
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
