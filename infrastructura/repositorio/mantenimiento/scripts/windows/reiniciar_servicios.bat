@echo off
echo Reiniciando servicios de red, audio e impresión...
net stop "AudioSrv" && net start "AudioSrv"
net stop "Spooler" && net start "Spooler"
net stop "Cola de Impresion" && net start "Cola de Impresion"
netsh interface set interface "Wi-Fi" admin=disable
timeout /t 2 >nul
netsh interface set interface "Wi-Fi" admin=enable
echo Servicios reiniciados correctamente.
pause
