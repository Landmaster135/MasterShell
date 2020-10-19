function ReceiverInputtedKey(){
  param(
    [string[]] $choices
  );

  $nowDir = pwd;
  $choices_joined = $choices -join "／";
  $inputQuestion = "Your Directory is "+ $nowDir + ". You Make Directory? [" + $choices_joined + "]";
  $inputAnswer = "";

  while ($choices -cnotcontains $inputAnswer) {
    $inputAnswer = Read-Host $inputQuestion;
  }

  return $inputAnswer;
}

function MakeDirSeries(){
  param(
    [string] $targetDir,
    [System.Object[]] $numList
  );
  
  $choices = "Y", "n";
  $inputAnswer = (ReceiverInputtedKey $choices);

  if ($inputAnswer -ceq $choices[0]){
    Write-Output "Making directories now.....";
  } elseif ($inputAnswer -ceq $choices[1]) {
    exit;
  } else {
    Write-Host "Unexpected Key Error. Exit.";
    exit;
  }
  
  $numList | ForEach-Object {
    # .ToString()メソッド100の位までゼロ埋め
    # （10の位までなら'00'を指定）
    $dirName = $_.ToString('000');

    New-Item -ItemType Directory "No.$dirName";
  }
}

$targetDir = "C:\Users\95066\Downloads";
$numList   = 0..100;
MakeDirSeries $targetDir $numList;

