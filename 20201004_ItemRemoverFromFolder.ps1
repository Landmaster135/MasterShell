# --- code by utf-8 ---
# ExtractorFolderName.ps1

# absolutely path of target folder to write
# ---------------------------- !! CHECK start !! ----------------------------
$target0 = 'C:\Users\%username%\Downloads\';
$target1 = 'musicList\';
# ---------------------------- !! CHECK end !! ----------------------------

# absolutely path of target file to write
$exportExt = '.csv';
$target_to_save = $target0 + $target1;
$target_output = $target_to_save + '_FolderList' + $exportExt;

# absolutely path of target file to read
# ---------------------------- !! CHECK start !! ----------------------------
$target_to_read = 'D:\WindowsVOL\MUSIC\MUSIK\';
# ---------------------------- !! CHECK end !! ----------------------------


$targetItem = '1-01 ワタリドリ.mp3';

$sh = New-Object -ComObject Shell.Application
$targetFolder = $sh.Namespace($target_to_read) 
$folderList = Get-ChildItem $target_to_read -Directory;

foreach($folder in $folderList) {
  $item = $targetFolder.ParseName($folder).Path;
  $removeTarget = $item + '\' + $targetItem
  Remove-Item $removeTarget;
  #Write-Output $item >> $target_output;
}

