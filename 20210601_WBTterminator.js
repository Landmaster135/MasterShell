// innerHTML："\n\n  <b>1/10</b>\n"
var pageNum = Number(document.getElementById("PAGE").innerHTML.substr(9,2));
for(var i = 0; i < pageNum; i++){
	goNext();
}
