#!/bin/bash
echo "Limpiando historial de comandos..."
> ~/.bash_history
> ~/.zsh_history
history -c
echo "Historial eliminado."
