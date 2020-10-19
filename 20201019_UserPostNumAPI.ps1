5..8 | % {

  # URLの生成（例として日本郵便が公開する【郵便番号API】へのリクエストURLを作成）
  $url = "https://api.zipaddress.net/?zipcode=904000$_"

  # HTTPリクエストの送信
  Write-Host "テスト実行（URL：${url}）"
  $res = Invoke-WebRequest $url

  # HTTPレスポンスの応答本文のJSONをオブジェクトに変換する
  $obj = ConvertFrom-Json $res.Content

  # テスト結果を出力
  if ( $obj.code -eq '200' ) {
    Write-Host 'コード値正常' -ForegroundColor Cyan
    Write-Host ('住所：' + $obj.data.fullAddress) -ForegroundColor Cyan

  } elseif ( $obj.code -eq '404' ) {
    Write-Host ('コード値異常：' + $obj.code ) -ForegroundColor Red
    Write-Host '住所が存在しません' -ForegroundColor Red

  } else {
    Write-Host ('コード値異常：' + $obj.code ) -ForegroundColor DarkRed
  }

  # 次のURLをテストする前に2秒開ける（郵便番号APIサーバへの負荷防止）
  Start-Sleep -Seconds 2
}

