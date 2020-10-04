# --- code by utf-8 ---
# CheckerOfFileMetaData.ps1

# absolutely path of target folder to write
# ---------------------------- !! CHECK start !! ----------------------------
$target0 = 'C:\Users\OCT--\Downloads\';
$target1 = 'musicList\';
# ---------------------------- !! CHECK end !! ----------------------------

# absolutely path of target file to write
$targetExt = '.mp3';
$exportExt = '.csv';
$target_to_save = $target0 + $target1;
$target_output = $target_to_save + '_FileMeataData' + $exportExt;

# absolutely path of target file to read
# ---------------------------- !! CHECK start !! ----------------------------
$target_to_read = 'D:\WindowsVOL\MUSIC\MUSIK2\';
# ---------------------------- !! CHECK end !! ----------------------------

$sh = New-Object -ComObject Shell.Application
$folder = $sh.Namespace($target_to_read) 
$fileList = Get-ChildItem $target_to_read -Recurse -File -Filter *$targetExt;

foreach($file in $fileList) {
  $item = $folder.ParseName($file);
  Write-Output $item;
  for ($i=0; $i -lt 110; $i++){
    $output = $folder.GetDetailsOf($item, $i);
    Write-Output $output >> $target_output;
  }
}