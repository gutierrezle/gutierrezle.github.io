#!/bin/bash
echo "Eliminando archivos .tmp, .bak, .log..."
find ~ -type f \( -name "*.tmp" -o -name "*.bak" -o -name "*.log" \) -delete
echo "Hecho."
