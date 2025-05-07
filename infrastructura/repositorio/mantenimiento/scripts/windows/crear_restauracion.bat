@echo off
powershell -Command "Checkpoint-Computer -Description 'Punto de restauración manual' -RestorePointType 'MODIFY_SETTINGS'"
echo Punto de restauración creado.
pause
