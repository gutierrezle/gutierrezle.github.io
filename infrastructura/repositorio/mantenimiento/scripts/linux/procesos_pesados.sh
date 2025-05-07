#!/bin/bash
echo "Procesos que consumen más RAM:"
ps aux --sort=-%mem | head -n 10

echo
echo "Procesos que consumen más CPU:"
ps aux --sort=-%cpu | head -n 10
