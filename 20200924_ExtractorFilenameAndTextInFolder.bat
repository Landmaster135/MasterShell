@echo off

setlocal enabledelayedexpansion

:: date of execution
set execDate=%date:~0,4%%date:~5,2%%date:~8,2%
set execDateTime=%execDate%%time:~0,2%%time:~3,2%%time:~6,2%

:: absolutely path of target folder to write
:: ---------------------------- !! CHECK start !! ----------------------------
set target0=C:\work\20200929_honbantest\
set target1=wordmemo\
:: ---------------------------- !! CHECK end !! ----------------------------

:: read from each file and write
set target2=wordmemo_shukei.csv
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

:: Prepare to count linefeed
set target5=gyousuu_count_all_1.csv
set target6=gyousuu_count_all_2.csv
set target7=gyousuu_count_sum.csv
set target_all_1=%target0%%target5%
set target_all_2=%target0%%target6%
set target_sum=%target0%%target7%

:: Write to target2
echo コンピュータ名%comma%ファイル名%comma%作成日時%comma%更新日時%comma%ファイルサイズ[Byte]>> %target3%
for %%A in (%target0%%target1%*) do (
  set Str1=%%A
  REM echo !Str1:~%startChr1%,%countChr%!%comma%%%~tA>> %target3%
  type !Str1!>> %target3%

  find /c /v "" < !Str1! >> %target_all_2%
)

:: Get sum of the linefeed from the file summarizing linefeed of all files.
dir %target0%%target1% /b >> %target_all_1%
find /c /v "" < %target3% >> %target_sum%

endlocal
