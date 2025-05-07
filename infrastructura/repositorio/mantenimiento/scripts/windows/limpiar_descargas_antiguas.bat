@echo off
forfiles /p "%USERPROFILE%\Downloads" /s /m *.* /d -60 /c "cmd /c del @path"
echo Archivos antiguos de descargas eliminados.
pause
