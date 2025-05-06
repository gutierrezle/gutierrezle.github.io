#!/bin/bash
echo "Cerrando Chrome..."
pkill chrome
echo "Limpiando caché..."
rm -rf ~/.cache/google-chrome/Default/Cache/*
echo "Caché limpiada."
