// 以下の手順でスライドを進められるので、
// 良ければお役立てください。
// （chromeとedgeで出来ることは確認できてます）

// 1.ブラウザ上で、ctrl + shift + Cを押す。開発者ツールが立ち上がります。
// 2.ページ内上部の要素のどれか（「コースメニュー」とか「〇/9」とか）
// にマウスを合わせるとハイライトされるので、
// その状態でクリック。
// 3.開発者ツール内のコンソールで「goNext();」を実行。スライドが進みます。
// また、goPrev();で前のスライドに戻れます。
// for文で回すのは禁じ手ですね（笑）

// innerHTML："\n\n  <b>1/10</b>\n"
console.log(document.getElementById("PAGE").innerHTML);
var pageNum = Number(document.getElementById("PAGE").innerHTML.substr(9,2));
// pageNum = 30; // 動かなかったらこっちで。作った側としては無念だが。
for(var i = 0; i < pageNum; i++){
	goNext();
}

// innerHTML："<b>1/10</b>"
console.log(document.getElementById("PAGE").innerHTML);
var pageNum = Number(document.getElementById("PAGE").innerHTML.substr(5,2));
for(var i = 0; i < pageNum; i++){
	goNext();
}
