# --- code by utf-8 ---
# ExtractorFromFolder.ps1

# date of execution
$execDate     = Get-Date -Format "yyyyMMdd";
$execTime     = Get-Date -Format "HHmmss";
$execDateTime = $execDate + $execTime;

$location     = 'C:\Users\%username%\Downloads'

. .\20201005_BrowserFileDialog.ps1
$location     = browserFileDialog('Desktop');

$exportFile   = 'fileList.txt';

function extractorFromFolder{
  param($execDateTime, $location, $exportFile)

  Set-Location ;
  Get-ChildItem -Path * | ForEach-Object{Write-Host $_.name};
  Get-ChildItem -Path * | ForEach-Object{Write-Output $_.name >>$exportFile};
}

# extract file list from folder.
extractorFromFolder $execDateTime $location $exportFile


Desktop, Programs, MyDocuments, Personal, Favorites, Startup, Recent, SendTo, StartMenu, MyMusic, MyVideos, DesktopDire
ctory, MyComputer, NetworkShortcuts, Fonts, Templates, CommonStartMenu, CommonPrograms, CommonStartup, CommonDesktopDir,,,
ectory, ApplicationData, PrinterShortcuts, LocalApplicationData, InternetCache, Cookies, History, CommonApplicationData,,,,
, Windows, System, ProgramFiles, MyPictures, UserProfile, SystemX86, ProgramFilesX86, CommonProgramFiles, CommonProgram,,
FilesX86, CommonTemplates, CommonDocuments, CommonAdminTools, AdminTools, CommonMusic, CommonPictures, CommonVideos, Re,,,
sources, LocalizedResources, CommonOemLinks, CDBurning,,,,,,,,
