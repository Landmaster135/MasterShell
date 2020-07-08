@echo off

REM --- code by utf-8 ---
REM MachineInfoExtractor.bat

wmic csproduct get Vendor
wmic csproduct get Name
wmic csproduct get IdentifyingNumber

wmic os get Name
wmic CPU get Name
wmic CPU get NumberOfCores
wmic CPU get NumberOfLogicalProcessors
wmic computersystem get TotalPhysicalMemory
wmic logicaldisk get deviceid,freespace
REM extract data only chosen drive.
wmic logicaldisk get deviceid,freespace | find "C:"

wmic COMPUTERSYSTEM get Domain /value

echo.
ver
echo.

echo "show systeminfo"
systeminfo

pause