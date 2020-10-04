# --- code by utf-8 ---
# ExtractorFilenameIncludingSubFolder.ps1

# date of execution
$execDate     = Get-Date -Format "yyyyMMdd";
$execTime     = Get-Date -Format "HHmmss";
$execDateTime = $execDate + $execTime;

# absolutely path of target folder to write
# ---------------------------- !! CHECK start !! ----------------------------
$target0 = 'C:\Users\%username%\Downloads\';
$target1 = 'musicList\';
# ---------------------------- !! CHECK end !! ----------------------------

# absolutely path of target file to read
# ---------------------------- !! CHECK start !! ----------------------------
$target_to_read = 'D:\WindowsVOL\MUSIC\MUSIK\';
# ---------------------------- !! CHECK end !! ----------------------------

# absolutely path of target file to write
$targetExt = '.mp3';
$exportExt = '.csv';
$centerNumber = HOSTNAME.EXE;
$target_to_save = $target0 + $target1;
$prefix_of_target_output = $target_to_save + $execDateTime + $centerNumber;
$target_output = $prefix_of_target_output + '_music_list' + $exportExt;

# prepare to exception handling.
$ErrorActionPreference = "Stop"
$error_message = '';

function exceptionHandlerAlreadyExist {
  Param($target_to_save, $targetExt, $exportExt, $execDateTime);

  $centerNumber = HOSTNAME.EXE;
  $startChr0 = $execDateTime.Length;
  $countChr  = $centerNumber.Length;

  $wmemoList = Get-ChildItem $target_to_save -File -Filter *$exportExt;
  $target_error = $target_to_save + $execDateTime + $centerNumber + 'error_exists_' + $exportExt;

  foreach($file in $wmemoList) {
    $file1 = $file.FullName;
    $name = $(Get-ItemProperty $file1).BaseName + $targetExt;
    if ($name.Substring($startChr0, $countChr) -eq $centerNumber) {
      $error_message = $execDateTime + ': file already exists.';
      Write-Output $error_message >> $target_error;
      exit;
    }
  }
}

# NOT execute if a file about same centerNumber is exist
exceptionHandlerAlreadyExist $target_to_save $targetExt $exportExt $execDateTime;


function exceptionHandlerItemNotFound {
  Param($target_to_save, $target_to_read, $targetExt, $execDateTime);

  $centerNumber = HOSTNAME.EXE;
  $target_error = $target_to_save + $execDateTime + $centerNumber + 'error_no_path' + $exportExt;
  $isItemNotFound = $false;

  try {
    $fileList = Get-ChildItem $target_to_read -Recurse -File -Filter *$targetExt;
    # $fileList = Get-ChildItem -Recurse $target_to_read -File -Filter *$targetExt | ? { ! $_.PSIsContainer } | % { $_.FullName };
  }
  catch [Exception] {
    $error_message = $execDateTime + ': ' + $_.Exception.Message;
    [void](Write-Output $error_message >> $target_error);
    $isItemNotFound = $true;
  }
  return $isItemNotFound;
}

# Error Handler (ItemNotFoundException)
$isItemNotFound = exceptionHandlerItemNotFound $target_to_save $target_to_read $targetExt $execDateTime;
if ($isItemNotFound -eq $true) {
  exit;
}

function exceptionHandlerNoFile {
  Param($target_to_save, $target_to_read, $targetExt, $execDateTime);

  $target_error = $target_to_save + $execDateTime + $centerNumber + 'error_no_file' + $exportExt;
  if ($fileList -eq $null) {
    $error_message = $execDateTime + ': no files but a folder exists.';
    Write-Output $error_message >> $target_error;
    $isItemNotFound = $true;
  }else{
    $isItemNotFound = $false;
  }
  return $isItemNotFound;
}

# Error Handler (no wordmemo files)
$isItemNotFound = exceptionHandlerNoFile $target_to_save $target_to_read $targetExt $execDateTime;
if ($isItemNotFound -eq $true) {
  exit;
}

function exportCSVfromList ($target_to_read, $target_output) {
  # $fileList     : files to export.
  # $target_output: absolute directory to export.
  $sh = New-Object -ComObject Shell.Application
  $folder = $sh.Namespace($target_to_read) 
  $fileList = Get-ChildItem $target_to_read -Recurse -File -Filter *$targetExt;
  
  $comma = ",";
  $output = '';


  # List of Artist
  $folderList1 = Get-ChildItem $target_to_read -Directory;
  foreach($folder1 in $folderList1) {
    
    $path_folder1 = $targetFolder.ParseName($folder1).Path;
    $sh1 = New-Object -ComObject Shell.Application
    $folder1 = $sh1.Namespace($path_folder1) 

    # List of Album
    $folderList2 = Get-ChildItem $path_folder1 -Directory;
    foreach($folder2 in $folderList2) {
      
      $path_folder2 = $folder1.ParseName($folder2).Path;
      $sh2 = New-Object -ComObject Shell.Application
      $folder2 = $sh2.Namespace($path_folder2) 

      # List of Track
      $fileList1 = Get-ChildItem $path_folder2 -File -Filter *$targetExt;
      foreach($file in $fileList1) {
        $item = $folder2.ParseName($file);
        # ---------------------------- !! CHECK start !! ----------------------------
        $title = $folder2.GetDetailsOf($item, 21);
        $artist = $folder2.GetDetailsOf($item, 13);
        $year = $folder2.GetDetailsOf($item, 15);
        # ---------------------------- !! CHECK end !! ----------------------------
        $output = $title + $comma + $artist + $comma + $year;
        Write-Output $output >> $target_output;
      }
    }
  }

  # Could NOT execute and extract only header characters.
  foreach($file in $fileList) {
    #$item = $folder.ParseName($file);
    # ---------------------------- !! CHECK start !! ----------------------------
    #$title = $folder.GetDetailsOf($item, 21);
    #$artist = $folder.GetDetailsOf($item, 13);
    #$year = $folder.GetDetailsOf($item, 15);
    # ---------------------------- !! CHECK end !! ----------------------------
    #$output = $title + $comma + $artist + $comma + $year;
    #Write-Output $output >> $target_output;
  }
}

# Extract meta data of target file.
exportCSVfromList $target_to_read $target_output;


exit
