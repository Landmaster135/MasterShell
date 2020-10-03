@echo off

REM --- code in utf-8 ---
REM Drag .ps1 file to me.

echo "ExecPS.bat"

set execDir=..\Media\
set execPS=haifu.ps1

powershell -NoProfile -ExecutionPolicy Unrestricted %execDir%%execPS%

exit