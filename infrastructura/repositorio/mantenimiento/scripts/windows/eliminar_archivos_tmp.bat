@echo off
echo Eliminando archivos .tmp, .bak, .log...
for /r %%x in (*.tmp *.bak *.log) do del "%%x"
echo Eliminados.
pause
