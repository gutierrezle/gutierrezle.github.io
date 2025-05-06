@echo off
echo Buscando actualizaciones...
PowerShell -Command "Get-WindowsUpdate"
pause
