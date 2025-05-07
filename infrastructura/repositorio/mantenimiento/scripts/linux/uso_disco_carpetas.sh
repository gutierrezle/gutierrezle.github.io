#!/bin/bash
echo "Uso de disco por carpeta en $(pwd):"
du -h --max-depth=1 | sort -hr
