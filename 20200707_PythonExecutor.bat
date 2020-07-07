@echo off

REM --- code in utf-8 ---
REM Drag .py file to me.

for %%i in (%*) do (
C:\Users\%username%\AppData\Local\Continuum\anaconda3\python.exe %%i
)
pause
