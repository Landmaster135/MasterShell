# --- code by utf-8 ---
# MachineInfoExtractor.bat

wmic csproduct get Vendor
wmic csproduct get Name
wmic csproduct get IdentifyingNumber

wmic os get Name
wmic CPU get Name
wmic CPU get NumberOfCores
wmic CPU get NumberOfLogicalProcessors
echo '--- Win32_PhysicalMemory -----------------------------------------------------------'
Get-WmiObject Win32_PhysicalMemory
wmic logicaldisk get deviceid,freespace

# extract data only chosen drive.
echo '--- Get-Volume -----------------------------------------------------------'
Get-Volume

echo '--- Domain Group -----------------------------------------------------------'
wmic COMPUTERSYSTEM get Domain /value

echo ""
echo '--- Win32_OperatingSystem -----------------------------------------------------------'
Get-WmiObject Win32_OperatingSystem
echo ''

echo '"show systeminfo"'
systeminfo

pause

exit