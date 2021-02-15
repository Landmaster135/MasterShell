function setTrigger(){
  var funcName = 'setTrigger';
  deleteTrigger(funcName);
  createTrigger(funcName);
  duplicateDocument();
}

function createTrigger(funcName){
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(16); // 日本の時間より14時間早く設定する。6時に作る。
  date.setMinutes(1);
  ScriptApp.newTrigger(funcName).timeBased().at(date).create();
}

function deleteTrigger(funcName){
  const triggers = ScriptApp.getProjectTriggers();
  for(const trigger of triggers){
    if(trigger.getHandlerFunction() == funcName){
      ScriptApp.deleteTrigger(trigger);
    }
  }
}

function createDocument() {
  var today = new Date();
  today = Utilities.formatDate(today,"JST", "yyyyMMdd(E)");
  var fileTitle = today;

  //【手順1】：新規ドキュメントをマイドライブに作成する
  var docFile = DocumentApp.create(fileTitle);
  //【手順2】：【手順1】で作成したスプレッドシートをFileオブジェクトとして取得する */
  const fileId = DriveApp.getFileById(docFile.getId());
  //【手順3】：手順1で作成したドキュメントを指定フォルダに「追加」する（コピーではない）
  const folderId = '1TL2uyYkFHNp5ET8TJXklxkjUMLgt359c'; //フォルダID（「Diary」）
  DriveApp.getFolderById(folderId).addFile(fileId);
  //【手順4】：作成したドキュメントをマイドライブから「削除」する
  DriveApp.getRootFolder().removeFile(fileId);

  // ドキュメントを編集する。
  var body_docFile = docFile.getBody();
  // ドキュメントのページ設定。
  var margin_mm    = 13;
  var dpi          = 72;
  var unit_pixel   = 25.4;
  var margin_pixel = margin_mm * dpi / unit_pixel;
  body_docFile.setMarginTop(margin_pixel);
  body_docFile.setMarginBottom(margin_pixel);
  body_docFile.setMarginLeft(margin_pixel);
  body_docFile.setMarginRight(margin_pixel);
  // ドキュメントの内容を編集する。
  for(let i = 0; i <= 2; i++) {
    // 本体にタイトルを追加する
    var paragraph = body_docFile.appendParagraph('[未編集]');
    paragraph.editAsText().setFontSize('13');
    paragraph.editAsText().setBold(true);
    // パラグラフに内容を追加する
    var text = paragraph.appendText('\n');
    text.editAsText().setFontSize('10');
    text.editAsText().setBold(false);
  }
}

function duplicateDocument() {
  // テンプレートファイル（「yyyyMMdd(E)」）
  var templateFile = DriveApp.getFileById('1CBM96cEjVesKFxuKnlLYTETSWAElju2ZteZeEDskWDY');
  // 出力フォルダ（「010_Diary」）
  var OutputFolder = DriveApp.getFolderById('1TL2uyYkFHNp5ET8TJXklxkjUMLgt359c');
  // 出力ファイル名
  var OutputFileName = Utilities.formatDate(new Date(), 'JST', 'yyyyMMdd(E)');
  
  templateFile.makeCopy(OutputFileName, OutputFolder);
}

