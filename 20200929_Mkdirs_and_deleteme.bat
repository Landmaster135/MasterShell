@echo off

REM --- code in utf-8 ---
REM Make directories

targetDir=C:\Users\%username%\Downloads

:: Make directory
mkdir %targetDir%手順1_wordmemo調査ツール配布リストの更新手順
mkdir %targetDir%手順2_wordmemo調査ツール配布の手順
mkdir %targetDir%手順3_wordmemo調査ツール配布後の手順

:: Delete me
del /f "%~dp0%~nx0"
