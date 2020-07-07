@echo off

REM --- code in utf-8 ---
REM Drag .py file to me.

for %%i in (%*) do (
REM Comment one of two following lines out.
REM C:\Users\%username%\AppData\Local\Continuum\anaconda3\python.exe %%i
REM C:\Users\OCT--\Anaconda3\python.exe %%i
)
pause
