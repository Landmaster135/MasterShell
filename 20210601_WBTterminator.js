// innerHTML："\n\n  <b>1/10</b>\n"
console.log(document.getElementById("PAGE").innerHTML);
var pageNum = Number(document.getElementById("PAGE").innerHTML.substr(9,2));
for(var i = 0; i < pageNum; i++){
	goNext();
}

// innerHTML："<b>1/10</b>"
console.log(document.getElementById("PAGE").innerHTML);
var pageNum = Number(document.getElementById("PAGE").innerHTML.substr(5,2));
for(var i = 0; i < pageNum; i++){
	goNext();
}
