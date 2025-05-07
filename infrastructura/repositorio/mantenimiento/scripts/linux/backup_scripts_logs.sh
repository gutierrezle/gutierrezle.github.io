#!/bin/bash
FECHA=$(date +%F)
BACKUP_DIR="$HOME/BackupScripts/$FECHA"

mkdir -p "$BACKUP_DIR/scripts"
mkdir -p "$BACKUP_DIR/logs"

cp -r "$HOME/scripts"/* "$BACKUP_DIR/scripts" 2>/dev/null
cp -r "$HOME/logs"/* "$BACKUP_DIR/logs" 2>/dev/null

echo "Backup guardado en: $BACKUP_DIR"
