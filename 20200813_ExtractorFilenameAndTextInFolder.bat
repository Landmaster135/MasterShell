@echo off

setlocal enabledelayedexpansion

:: date of execution
set execDate=%date:~0,4%%date:~5,2%%date:~8,2%
set execDateTime=%execDate%%time:~0,2%%time:~3,2%%time:~6,2%

:: absolutely path of target folder to write
set target0=C:\Users\Public\Desktop\
set target1=wordmemotest\

:: read from each file and write
set target2=wordmemotest_shukei.csv
set target3=%target0%%target2%
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

:: Write to target2
for %%A in (%target0%%target1%*) do (
  set Str1=%%A
  echo !Str1:~%startChr1%,%countChr%!>> %target3%
  for /f %%i in (%%A) do (
    echo %%i>> %target3%
  )
)

