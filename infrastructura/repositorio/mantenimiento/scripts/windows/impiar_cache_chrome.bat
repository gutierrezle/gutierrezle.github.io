@echo off
echo Cerrando Chrome...
taskkill /F /IM chrome.exe
echo Limpiando caché...
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache"
echo Caché limpiada.
pause
