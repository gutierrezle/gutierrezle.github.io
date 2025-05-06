@echo off
echo Limpiando archivos temporales...
del /s /q %temp%\*
rd /s /q %temp%
echo Limpieza de archivos temporales completada.
pause
