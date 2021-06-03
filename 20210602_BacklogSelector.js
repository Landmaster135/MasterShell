// (RSYS_NEXT_STEP1_1_TEST)用
// 変数宣言（画面・機能）
var select1 = document.getElementsByName("attribute_47472_4_1622515124000"); // selectedタグ変更用に取得。
var select2 = document.getElementsByClassName("selectbox--multiple__scroll"); // class変更用に取得。

// 選択肢の確認
var i = 0;
var output = '';
select1[0].forEach(item => {
	output += item['innerHTML'] + '\t' + i + '\n';
	i++;
})
console.log(output);

// 変数宣言（基本）
var statuses = document.getElementById('selectStatuses');
var components = document.getElementById('selectComponents');
var issueType = document.getElementsByName('issueTypeId');

// 選択肢の確認（画面・機能：上手く動かない場合用）
var i = 0;
var output = '';
select1[0].forEach(item => {
	output += item['innerHTML'] + '\t' + i + '\n';
	i++;
})
console.log(output);

// 選択肢の確認（基本：上手く動かない場合用）
var array = [statuses, components, issueType[0]];
array.forEach(item1 => {
	var output = '';
	item1.forEach(item2 => {
		output += item2['innerHTML'] + '\t' + i + '\n';
		i++;
	})
	console.log(output);
	i = 0;
})


// 選択する（画面・機能）
select1[0].options[3].selected = true; select2[8].children[3].className += ' is_selected';
select1[0].options[14].selected = true; select2[8].children[14].className += ' is_selected';
select1[0].options[15].selected = true; select2[8].children[15].className += ' is_selected';
select1[0].options[16].selected = true; select2[8].children[16].className += ' is_selected';

select1[0].options[4].selected = true; select2[8].children[4].className += ' is_selected';
select1[0].options[6].selected = true; select2[8].children[6].className += ' is_selected';
select1[0].options[22].selected = true; select2[8].children[22].className += ' is_selected';
select1[0].options[23].selected = true; select2[8].children[23].className += ' is_selected';
select1[0].options[21].selected = true; select2[8].children[21].className += ' is_selected';
select1[0].options[19].selected = true; select2[8].children[19].className += ' is_selected';
select1[0].options[20].selected = true; select2[8].children[20].className += ' is_selected';
select1[0].options[5].selected = true; select2[8].children[5].className += ' is_selected';

// 選択外す（画面・機能）
select1[0].options[3].selected = false; select2[8].children[3].className = 'selectbox--multiple__item';
select1[0].options[14].selected = false; select2[8].children[14].className = 'selectbox--multiple__item';
select1[0].options[15].selected = false; select2[8].children[15].className = 'selectbox--multiple__item';
select1[0].options[16].selected = false; select2[8].children[16].className = 'selectbox--multiple__item';

select1[0].options[4].selected = false; select2[8].children[4].className = 'selectbox--multiple__item';
select1[0].options[6].selected = false; select2[8].children[6].className = 'selectbox--multiple__item';
select1[0].options[22].selected = false; select2[8].children[22].className = 'selectbox--multiple__item';
select1[0].options[23].selected = false; select2[8].children[23].className = 'selectbox--multiple__item';
select1[0].options[21].selected = false; select2[8].children[21].className = 'selectbox--multiple__item';
select1[0].options[19].selected = false; select2[8].children[19].className = 'selectbox--multiple__item';
select1[0].options[20].selected = false; select2[8].children[20].className = 'selectbox--multiple__item';
select1[0].options[5].selected = false; select2[8].children[5].className = 'selectbox--multiple__item';

// 選択する（基本）
statuses.options[1].selected = true; select2[0].children[1].className += ' is_selected';
statuses.options[2].selected = true; select2[0].children[2].className += ' is_selected';
statuses.options[3].selected = true; select2[0].children[3].className += ' is_selected';
components.options[1].selected = true; select2[1].children[1].className += ' is_selected';
components.options[2].selected = true; select2[1].children[2].className += ' is_selected';
components.options[3].selected = true; select2[1].children[3].className += ' is_selected';
issueType[0].options[2].selected = true; select2[2].children[2].className += ' is_selected';
issueType[0].options[5].selected = true; select2[2].children[5].className += ' is_selected';

// 選択外す（基本）
statuses.options[1].selected = false; select2[0].children[1].className = 'selectbox--multiple__item';
statuses.options[2].selected = false; select2[0].children[2].className = 'selectbox--multiple__item';
statuses.options[3].selected = false; select2[0].children[3].className = 'selectbox--multiple__item';
components.options[1].selected = false; select2[1].children[1].className = 'selectbox--multiple__item';
components.options[2].selected = false; select2[1].children[2].className = 'selectbox--multiple__item';
components.options[3].selected = false; select2[1].children[3].className = 'selectbox--multiple__item';
issueType[0].options[2].selected = false; select2[2].children[2].className = 'selectbox--multiple__item';
issueType[0].options[5].selected = false; select2[2].children[5].className = 'selectbox--multiple__item';


----------------------------------------------------------------------------------------------------------------

// (SEJRSYS_MKI_ITA_1_1)用
// 変数宣言（画面・機能）
var select1 = document.getElementsByName("attribute_48120_4_1622186317000"); // selectedタグ変更用に取得。
var select2 = document.getElementsByClassName("selectbox--multiple__scroll"); // class変更用に取得。

// 選択肢の確認（上手く動かない場合用）
var i = 0;
var output = '';
select1[0].forEach(item => {
	output += item['innerHTML'] + '\t' + i + '\n';
	i++;
})
console.log(output);

// 選択する（画面・機能）
select1[0].options[3].selected = true; select2[13].children[3].className += ' is_selected';
select1[0].options[14].selected = true; select2[13].children[14].className += ' is_selected';
select1[0].options[15].selected = true; select2[13].children[15].className += ' is_selected';
select1[0].options[16].selected = true; select2[13].children[16].className += ' is_selected';

select1[0].options[4].selected = true; select2[13].children[4].className += ' is_selected';
select1[0].options[6].selected = true; select2[13].children[6].className += ' is_selected';
select1[0].options[7].selected = true; select2[13].children[7].className += ' is_selected';
select1[0].options[22].selected = true; select2[13].children[22].className += ' is_selected';
select1[0].options[23].selected = true; select2[13].children[23].className += ' is_selected';
select1[0].options[21].selected = true; select2[13].children[21].className += ' is_selected';
select1[0].options[19].selected = true; select2[13].children[19].className += ' is_selected';
select1[0].options[20].selected = true; select2[13].children[20].className += ' is_selected';

// 選択外す（画面・機能）
select1[0].options[3].selected = false; select2[13].children[3].className = 'selectbox--multiple__item';
select1[0].options[14].selected = false; select2[13].children[14].className = 'selectbox--multiple__item';
select1[0].options[15].selected = false; select2[13].children[15].className = 'selectbox--multiple__item';
select1[0].options[16].selected = false; select2[13].children[16].className = 'selectbox--multiple__item';

select1[0].options[4].selected = false; select2[13].children[4].className = 'selectbox--multiple__item';
select1[0].options[6].selected = false; select2[13].children[6].className = 'selectbox--multiple__item';
select1[0].options[7].selected = false; select2[13].children[7].className = 'selectbox--multiple__item';
select1[0].options[22].selected = false; select2[13].children[22].className = 'selectbox--multiple__item';
select1[0].options[23].selected = false; select2[13].children[23].className = 'selectbox--multiple__item';
select1[0].options[21].selected = false; select2[13].children[21].className = 'selectbox--multiple__item';
select1[0].options[19].selected = false; select2[13].children[19].className = 'selectbox--multiple__item';
select1[0].options[20].selected = false; select2[13].children[20].className = 'selectbox--multiple__item';
