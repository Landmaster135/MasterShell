function Do_Process(){
    param(
        [string] $text
    )

    $time_wait = 3
    Start-Sleep -Seconds $time_wait
    Write-Host "$text, Wait:$time_wait"
}

function Test_Sync(){
    foreach ($i in 1..5) {
        Do_Process "Process ${i}"
    }
}

Workflow Test_Parallel(){
    foreach -parallel ($i in 1..5) {
        Do_Process "Process ${i}"
    }
}

$time_sync = Measure-Command {
    Test_Sync
}
$time_parallel = Measure-Command {
    Test_Parallel
}

$time_sync.TotalMilliseconds
$time_parallel.TotalMilliseconds
