@echo off

setlocal enabledelayedexpansion

:: date of execution
set execDate=%date:~0,4%%date:~5,2%%date:~8,2%
set execDateTime=%execDate%%time:~0,2%%time:~3,2%%time:~6,2%

:: absolutely path of target folder to write
set env_address=XXX.XXX.XXX.XXX
set target0=\\%env_address%\c$\Users\Public\Desktop\
set target1=wordmemotest\

:: absolutely path of target file to read
set target2=C:\xxx\xxx\xxx\

:: absolutely path of target file to write
set centerNumber=%COMPUTERNAME%
set target3=%target0%%target1%%execDateTime%%centerNumber%_haifu_test.txt
set target4=%target0%%target1%
set comma=,
set startChr0=14
set countChr=9

:: Count length of base directory's name.
set len=0
:COUNT
if not "%target4%"=="" (
    set target4=%target4:~1%
    set /a len=%len%+1
    goto :COUNT
)

:: Remake a start point for absolutely path
set /a startChr1=%len%+%startChr0%

:: NOT execute me if a file about same centerNumber is exist
for %%A in (%target0%%target1%*) do (
  set Str1=%%A
  set Str2=!Str1:~%startChr1%,%countChr%!
  if !Str2!==%centerNumber% (
    exit
  )
)

:: read size and number of file
set /a counter=0
rem for %%A in (%target2%*) do ( if exist %%A (set /a counter=counter+1) )
rem for /r %target2% %%A in (*.doc) do ( if exist %%A (set /a counter=counter+1) )
for /r %target2% %%A in (*.doc) do (
  echo %centerNumber%%comma%%%A%comma%%%~zA>> %target3%
)

endlocal

