// code by utf-8

// Use Developer Tool（by ⌥⌘I）
var reader = new FileReader();
var today = new Date();
var length_of_taste = 'taste-bar taste-'.length;
var array = [`${[...document.querySelectorAll('span')][4].innerText}`, // ワイン名
             today.getFullYear() + "/" +  today.getMonth() + 1 + "/"+ today.getDate(), // 出会った日
             ``, // Instagramに上げた日
             ``, // 製造年
             `${[...document.querySelectorAll('td')][21].innerText}`, // 色
             ``,// 醸造方法
             ``,// 金額
             ``,// 入手場所
             ``,// 最寄り駅
             `${[...document.querySelectorAll('td')][18].innerText}`, // 原産地
             ``,// 感想
             `${[...document.querySelectorAll('td')][20].innerText}`, // 備考
             location.href, // 参考1
             ``,// 参考2
             ``,// Instagramに貼り付け
             ``,// vinicaフォルダに入れた
             `${[...document.querySelectorAll('div')][27].className}`.substr(length_of_taste,1), // ボリューム（軽い＜重い）
             `${[...document.querySelectorAll('div')][28].className}`.substr(length_of_taste,1), // タンニン（控えめ＜強い）
             `${[...document.querySelectorAll('div')][29].className}`.substr(length_of_taste,1), // 甘み（ドライ＜甘い）
             `${[...document.querySelectorAll('div')][30].className}`.substr(length_of_taste,1), // 酸味（まろやか＜シャープ）
             `${[...document.querySelectorAll('div')][31].className}`.substr(length_of_taste,1) // 果実味（スパイシー＜フルーティ）
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
