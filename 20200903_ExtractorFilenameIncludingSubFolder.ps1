# --- code by utf-8 ---
# ExtractorFilenameIncludingSubFolder.ps1

# date of execution
$execDate     = Get-Date -Format "yyyyMMdd";
$execTime     = Get-Date -Format "hhmmss";
$execDateTime = $execDate + $execTime;

# absolutely path of target folder to write
# ---------------------------- !! CHECK start !! ----------------------------
$target0 = '\\XXX.XXX.XXX.XXX\c$\Users\Public\Desktop\';
$target1 = 'wordmemotest\';
# ---------------------------- !! CHECK end !! ----------------------------

# absolutely path of target file to read
# ---------------------------- !! CHECK start !! ----------------------------
$target2 = 'C:\xxxxxxxx\xxxxxxx\word_memo\';
# ---------------------------- !! CHECK end !! ----------------------------

# absolutely path of target file to write
$centerNumber = HOSTNAME.EXE;
$target3 = $target0 + $target1 + $execDateTime + $centerNumber + '_haifu_test.txt';
$target4 = $target0 + $target1;
$comma = ',';
$startChr0 = $execDateTime.Length;
$countChr  = $centerNumber.Length;
$targetExt = '.doc';

# NOT execute if a file about same centerNumber is exist
$wmemoList = Get-ChildItem $target4 -File -Filter *.txt;

foreach($file in $wmemoList) {
  $file1 = $file.FullName;
  $name = $(Get-ItemProperty $file1).BaseName + $targetExt;
  if ($name.Substring($startChr0, $countChr) -eq $centerNumber) {
    exit;
  }
}

# $target2 = 'C:\Users\95066\Downloads';
$fileList = Get-ChildItem $target2 -Recurse -File -Filter *$targetExt;
$comma = ",";
$output = '';

foreach($file in $fileList) {
  $file1 = $file.FullName;
  # $name = $(Get-ItemProperty $file1).BaseName + $targetExt;
  $name = $(Get-ItemProperty $file1).Name;
  $cTime = $(Get-ItemProperty $file1).CreationTime;
  $wTime = $(Get-ItemProperty $file1).LastWriteTime;
  $size  = $(Get-ItemProperty $file1).Length;
  $output = $centerNumber + $comma + $name + $comma + $cTime.ToString("yyyy-MM-dd hh:mm:ss") + $comma + $wTime.ToString("yyyy-MM-dd hh:mm:ss") + $comma + $size;
  Write-Output $output >> $target3;
}

exit
