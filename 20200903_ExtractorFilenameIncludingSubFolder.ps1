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
$target_output = $target0 + $target1 + $execDateTime + $centerNumber + '.csv';
$target_to_save = $target0 + $target1;
$comma = ',';
$startChr0 = $execDateTime.Length;
$countChr  = $centerNumber.Length;
$targetExt = '.doc';

# get file list about the folder to save wordmemo files.
$wmemoList = Get-ChildItem $target_to_save -File -Filter *.csv;

# prepare to exception handling.
$ErrorActionPreference = "Stop"
$target_error = $target0 + $target1 + 'error_exists__' + $centerNumber + '.csv';
$error_message = '';

# NOT execute if a file about same centerNumber is exist
foreach($file in $wmemoList) {
  $file1 = $file.FullName;
  $name = $(Get-ItemProperty $file1).BaseName + $targetExt;
  if ($name.Substring($startChr0, $countChr) -eq $centerNumber) {
    $error_message = $execDateTime + ': file already exists.';
    Write-Output $error_message >> $target_error;
    exit;
  }
}

# Error Handler (ItemNotFoundException)
$target_error = $target0 + $target1 + 'error_no_path_' + $centerNumber + '.csv';
try {
  $fileList = Get-ChildItem $target2 -Recurse -File -Filter *$targetExt;
}
catch [Exception] {
  $error_message = $execDateTime + ': ' + $_.Exception.Message;
  Write-Output $error_message >> $target_error;
  exit;
}

# Error Handler (no wordmemo files)
$target_error = $target0 + $target1 + 'error_no_file_' + $centerNumber + '.csv';
if ($fileList -eq $null) {
  $error_message = $execDateTime + ': no files but a folder exists.';
  Write-Output $error_message >> $target_error;
  exit;
}

# prepare to output file which has survey results.
$comma = ",";
$output = '';

foreach($file in $fileList) {
  $file1 = $file.FullName;
  $name = $(Get-ItemProperty $file1).Name;
  $cTime = $(Get-ItemProperty $file1).CreationTime;
  $wTime = $(Get-ItemProperty $file1).LastWriteTime;
  $size  = $(Get-ItemProperty $file1).Length;
  $output = $centerNumber + $comma + $name + $comma + $cTime.ToString("yyyy-MM-dd hh:mm:ss") + $comma + $wTime.ToString("yyyy-MM-dd hh:mm:ss") + $comma + $size;
  Write-Output $output >> $target3;
}

exit
