@echo off
echo ¿Qué desea hacer?
echo 1 - Apagar
echo 2 - Reiniciar
set /p opcion=Ingrese su elección:

if "%opcion%"=="1" (
    shutdown /s /t 10
) else if "%opcion%"=="2" (
    shutdown /r /t 10
) else (
    echo Opción inválida.
)
pause
