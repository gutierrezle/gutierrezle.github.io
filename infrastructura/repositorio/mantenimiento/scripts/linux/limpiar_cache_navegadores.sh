#!/bin/bash
echo "Limpiando caché de navegadores..."

# Chrome
rm -rf ~/.cache/google-chrome/Default/Cache/*

# Firefox
rm -rf ~/.cache/mozilla/firefox/*.default-release/cache2/entries/*

# Brave
rm -rf ~/.cache/BraveSoftware/Brave-Browser/Default/Cache/*

echo "Caché eliminada."
