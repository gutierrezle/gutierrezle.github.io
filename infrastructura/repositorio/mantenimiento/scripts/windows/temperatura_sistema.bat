@echo off
echo Consultando temperatura (puede no estar disponible en todos los sistemas)...
wmic /namespace:\\root\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature
pause
