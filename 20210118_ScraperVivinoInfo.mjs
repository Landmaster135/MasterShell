// code by utf-8

// Use Developer Tool（by ⌥⌘I）
var reader = new FileReader();
var today = new Date();

var length_of_taste = 'width: 20%; left: '.length;
var color_of_wine = `${[...document.querySelectorAll('span')][14].innerText}`.replace('wine', 'Wine');
var list_of_target_parameter_of_wine;
// ワインの種類によって、取得するパラメータを変える。
switch (color_of_wine) {
    case "White Wine":
        list_of_target_parameter_of_wine = [0, null, 1, 2, null];
        break;
    case "Red Wine":
        list_of_target_parameter_of_wine = [0, 1, 2, 3, null];
        break;
}
// 各パラメータにスコアを付けて、その各スコアを結果用のリストに出す。
var list_of_result_parameter_of_wine = list_of_target_parameter_of_wine.map(target => {
    if (target == null) {return null;}
    // Vivino上のスコアを取得する。
    var score = Number(document.getElementsByClassName('indicatorBar__progress--3aXLX')[target].style['cssText'].substr(length_of_taste,2));
    switch (true) {
        case score > 70:
            return 5;
        case score > 50 && score <= 70:
            return 4;
        case score > 30 && score <= 50:
            return 3;
        case score > 10 && score <= 30:
            return 2;
        case score <= 10:
            return 1;
    }
})

var array = [`${[...document.querySelectorAll('span')][10].innerText}` + ` ` + `${[...document.querySelectorAll('span')][11].innerText}`, // ワイン名
             today.getFullYear() + "/" +  String(Number(today.getMonth()) + 1) + "/"+ today.getDate(), // 出会った日
             ``, // Instagramに上げた日
             ``, // 製造年
             color_of_wine, // 色
             ``,// 醸造方法
             ``,// 金額
             ``,// 入手場所
             ``,// 最寄り駅
             `${[...document.querySelectorAll('td')][2].innerText}`.replace(/\//g, '<'), // 原産地
             ``, // 原産国
             ``,// 感想
             ``,// ハッシュタグ
             `${[...document.querySelectorAll('td')][1].innerText}`.replace(/, /g, '、'), // 備考（葡萄とか）
             location.href, // 参考1
             ``,// 参考2
             ``,// Instagramに貼り付け
             ``,// vinicaフォルダに入れた
             list_of_result_parameter_of_wine[0], // ボリューム（軽い＜重い）
             list_of_result_parameter_of_wine[1], // タンニン（控えめ＜強い）
             list_of_result_parameter_of_wine[2], // 甘み（ドライ＜甘い）
             list_of_result_parameter_of_wine[3], // 酸味（まろやか＜シャープ）
             list_of_result_parameter_of_wine[4] // 果実味（スパイシー＜フルーティ）
            ];
var sep = "\t";
var data = ``;
array.forEach(function(value) {
    data += value;
    data += `${sep}`;
});

// This is it!
console.log(data);

// I don't know why this property is uncaughted.
// navigator.clipboard.writeText(data);
