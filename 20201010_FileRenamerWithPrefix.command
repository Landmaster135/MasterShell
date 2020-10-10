# --- utf8 coding ---
#!/bin/bash
echo ${BASH_SOURCE[0]}

if [ $# -ne 1 ]; then
  echo "Number of variable is wrong."
  exit 0
fi

targetDir="$1"
myDir=$(cd $(dirname $0); pwd)
exportFile='/FileRenamer.command'

statement_1='cd "'
statement_2='"; ls | awk '\''{ printf "mv \"%s\" '
statement_3='-%03d.jpg\\n", $0, NR }'\'' | sh; cd ..;'

# backup and change Environment Variable's value
IFS_BACKUP="$IFS"
IFS=$'\n'
count=0
array=(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)

# generate shell file
for i in `ls -1v $targetDir`; do
  order=`expr $count % ${#array[@]}`
  prefix=${array[$order]}
  echo $statement_1$targetDir'/'$i$statement_2$prefix$statement_3 >>$myDir$exportFile
  count=`expr $count + 1`
done

# change Environment Variable's value
IFS=$IFS_BACKUP

# execute generated shell file to rename target files
chmod 777 $myDir$exportFile
$myDir$exportFile

# remove generated shell file
rm $myDir$exportFile

exit 0



