@echo off
setlocal enabledelayedexpansion
echo Analizando uso de disco...

for /d %%D in (*) do (
    set "carpeta=%%D"
    for /f "tokens=3" %%S in ('dir /s /-c "%%D" ^| find "bytes"') do (
        echo !carpeta! - %%S bytes
    )
)
pause
