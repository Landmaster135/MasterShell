# --- code by utf-8 ---
# ExtractorFromFolder.ps1

# date of execution
$execDate     = Get-Date -Format "yyyyMMdd";
$execTime     = Get-Date -Format "HHmmss";
$execDateTime = $execDate + $execTime;

$location     = 'C:\Users\%username%\Downloads'
$exportFile   = 'fileList.txt';

. .\20201005_BrowserFileDialog.ps1
$location     = browserFileDialog('Desktop');

function extractorFromFolder{
  param($execDateTime, $location, $exportFile)

  Set-Location ;
  Get-ChildItem -Path * | ForEach-Object{Write-Host $_.name};
  Get-ChildItem -Path * | ForEach-Object{Write-Output $_.name >>$exportFile};
}

# extract file list from folder.
extractorFromFolder $execDateTime $location $exportFile
