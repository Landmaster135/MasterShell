# --- code by utf-8 ---
# ExtractorFilenameIncludingSubFolder.ps1

# date of execution
$execDate     = Get-Date -Format "yyyyMMdd";
$execTime     = Get-Date -Format "HHmmss";
$execDateTime = $execDate + $execTime;
$exportFile   = 'fileList.txt';

# extract file list from folder.
Set-Location C:\Users\95066\Downloads;
Get-ChildItem -Path * | ForEach-Object{Write-Host $_.name};
Get-ChildItem -Path * | ForEach-Object{Write-Output $_.name >>$exportFile};
