@Echo Off
REM Change \\COMPUTER\PRINTER to the printer you want to install

REM Add printer
rundll32 printui.dll,PrintUIEntry /in /n\\COMPUTER\PRINTER

REM Set printer as default
rundll32 printui.dll,PrintUIEntry /y /n\\COMPUTER\PRINTER
