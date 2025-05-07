#!/bin/bash
echo "Buscando actualizaciones de paquetes..."
sudo apt update
apt list --upgradable
