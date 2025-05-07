@echo off
echo Eliminando archivos temporales...
del /s /q "%TEMP%\*"
del /s /q "%USERPROFILE%\AppData\Local\Temp\*"
echo Listo.
pause
