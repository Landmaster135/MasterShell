@echo off

setlocal

:: date of execution
set execDate=%date:~0,4%%date:~5,2%%date:~8,2%
set execDateTime=%execDate%%time:~0,2%%time:~3,2%%time:~6,2%

:: absolutely path of target folder to write
set target0=wordmemotest
set env_address=XXX.XXX.XXX.XXX
set target1=\\%env_address%\c$\Users\Public\Desktop\%target0%\

:: absolutely path of target file to read
set target2=C:\xxx\xxx\xxx\

:: absolutely path of target file to write
set comma=,
set centerNumber=%COMPUTERNAME%
set target3=%target1%%execDateTime%%centerNumber%_haifu_test.txt

:: read size and number of file
rem set /a counter=0
rem for /r %target2% %%A in (*.doc) do ( if exist %%A (set /a counter=counter+1)
for /r %target2% %%A in (*.doc) do (
  echo %centerNumber%%comma%%%A%comma%%%~zA>> %target3%
)

endlocal
