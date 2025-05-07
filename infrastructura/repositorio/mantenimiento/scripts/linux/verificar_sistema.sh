#!/bin/bash
echo "Verificando archivos del sistema con debsums (si está instalado)..."
if ! command -v debsums &> /dev/null; then
  echo "Instalando debsums..."
  sudo apt update && sudo apt install debsums -y
fi
sudo debsums -s
echo "Verificación completada."
