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
echo ��ǰ��Ŀ: [ %pjn% ]
echo ***  ֻ������ npm install -g fis 
echo ***  fis ----------------------------------------------------
echo ***  1����Ĭ��Ŀ¼     2�����뵱ǰ��Ŀ      3�����б��ط�����
echo ***  -----------------------------------------------------fis
set /p fic=��ѡ��:
if %fic% == 1 call %fisexec% server open
if %fic% == 2 call %fisexec% release -d %dirpro% -op
if %fic% == 3 call %fisexec% server start
pause
goto sel
