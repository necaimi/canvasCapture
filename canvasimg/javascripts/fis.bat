::  fis shell tool
@echo off
set pj=%~p0
set pj=%pj:\= %
for %%a in (%pj%) do set pjn=%%a
set fisexec=%APPDATA%\npm\fis
set dirpro=../%pjn%-release
: sel
@cls
@echo off
title fis shell tool - by umbrella
echo 当前项目: [ %pjn% ]
echo ***  只适用于 npm install -g fis 
echo ***  fis ----------------------------------------------------
echo ***  1、打开默认目录     2、编译当前项目      3、运行本地服务器
echo ***  -----------------------------------------------------fis
set /p fic=请选择:
if %fic% == 1 call %fisexec% server open
if %fic% == 2 call %fisexec% release -d %dirpro% -op
if %fic% == 3 call %fisexec% server start
pause
goto sel
