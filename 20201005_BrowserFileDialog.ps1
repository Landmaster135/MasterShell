# --- code by utf-8 ---
# BrowserFileDialog.ps1

$abolutely_path = 'Desktop'

function browserFileDialog{
  param($abolutely_path)

  Add-Type -AssemblyName System.Windows.Forms
  $FileBrowser = New-Object System.Windows.Forms.OpenFileDialog -Property @{ 
    InitialDirectory = [Environment]::GetFolderPath($abolutely_path);
    Filter = 'text (*.txt,*.csv)|*.txt;*.csv';
    Title = 'Select File';
  }
  
  if($FileBrowser.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK){
    # [System.Windows.Forms.MessageBox]::Show($FileBrowser.FileName)
    return $FileBrowser.FileName;
  }else{
    # [System.Windows.Forms.MessageBox]::Show('Nothing selected.')
    return $false;
  }
}

# browse file dialog.
browserFileDialog $abolutely_path;
