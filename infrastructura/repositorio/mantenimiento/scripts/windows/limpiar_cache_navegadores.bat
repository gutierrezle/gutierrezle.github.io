@echo off
echo Limpiando caché de navegadores...

rem Chrome
del /q /s "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache\*"

rem Edge
del /q /s "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Cache\*"

rem Firefox
del /q /s "%APPDATA%\Mozilla\Firefox\Profiles\*.default-release\cache2\entries\*"

rem Brave
del /q /s "%LOCALAPPDATA%\BraveSoftware\Brave-Browser\User Data\Default\Cache\*"

echo Caché eliminada.
pause
