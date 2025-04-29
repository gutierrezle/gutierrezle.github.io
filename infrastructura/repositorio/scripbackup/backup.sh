#!/bin/bash

# Configuración
ORIGEN="/ruta/a/tu/carpeta"         # Carpeta que querés respaldar
DESTINO="/ruta/a/respaldo"          # Carpeta donde se guardan los respaldos
FECHA=$(date +%Y-%m-%d_%H-%M-%S)    # Fecha actual para el nombre del archivo
NOMBRE="respaldo_$FECHA.tar.gz"     # Nombre del archivo comprimido final

# Crear respaldo comprimido
tar -czf "$DESTINO/$NOMBRE" "$ORIGEN"

# Mensaje opcional
echo "Respaldo creado: $DESTINO/$NOMBRE"
