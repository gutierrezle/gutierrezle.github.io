#!/bin/bash
echo "¿Qué desea hacer?"
echo "1 - Apagar"
echo "2 - Reiniciar"
read -p "Ingrese su elección: " opcion

if [[ "$opcion" == "1" ]]; then
  shutdown now
elif [[ "$opcion" == "2" ]]; then
  reboot
else
  echo "Opción inválida."
fi
