@echo off
set FECHA=%DATE:/=-%
set BACKUP_DIR=%USERPROFILE%\BackupScripts\%FECHA%
mkdir "%BACKUP_DIR%"

xcopy "%USERPROFILE%\scripts" "%BACKUP_DIR%\scripts" /E /I /Y
xcopy "%USERPROFILE%\logs" "%BACKUP_DIR%\logs" /E /I /Y

echo Backup guardado en %BACKUP_DIR%
pause
