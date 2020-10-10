# --- utf8 coding ---
#!/bin/bash
echo ${BASH_SOURCE[0]}

if [ $# -ne 1 ]; then
  echo "Number of variable is wrong."
  exit 0
fi

myDir=$(cd $(dirname $0); pwd)

echo $myDir
SHNAME=`basename $0`

echo [$SHNAME] start time >> $myDir'/timestamp.txt'
date >> $myDir'/timestamp.txt'

echo `$1`

echo [$SHNAME] end time >> $myDir'/timestamp.txt'
date >> $myDir'/timestamp.txt'
