@echo off
net stop wuauserv
net stop bits
del /s /q C:\Windows\SoftwareDistribution\Download\*
net start bits
net start wuauserv
echo Windows Update limpio.
pause
