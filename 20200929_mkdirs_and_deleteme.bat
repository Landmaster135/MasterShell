@echo off

REM --- code in utf-8 ---
REM Make directories

targetDir=C:\Users\%username%\Downloads

:: Make directory
mkdir %targetDir%�菇1_wordmemo�����c�[���z�z���X�g�̍X�V�菇
mkdir %targetDir%�菇2_wordmemo�����c�[���z�z�̎菇
mkdir %targetDir%�菇3_wordmemo�����c�[���z�z��̎菇

:: Delete me
del /f "%~dp0%~nx0"