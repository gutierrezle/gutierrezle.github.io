@echo
DISM /Online /Cleanup-Image /CheckHealth 
DISM /Online /Cleanup-Image /ScanHealth 
DISM /Online /Cleanup-Image /RestoreHealth
PAUSE