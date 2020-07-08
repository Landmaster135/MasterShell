@echo off

REM --- code in utf-8 ---
REM Drag .ps1 file to me.

echo "PowershellExecutor.bat"

for %%i in (%*) do (
# powershell -NoProfile -ExecutionPolicy Unrestricted .\hogehoge.ps1
powershell -NoProfile -ExecutionPolicy Unrestricted %%i
)
pause