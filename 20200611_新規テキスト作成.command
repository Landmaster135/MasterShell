cd /Users/$USER/Downloads
VAR1=`date +%Y%m%d`
VAR2=`_`
touch $VAR1$VAR2.txt
open -a /Applications/TextEdit.app $VAR1$VAR2.txt
exit
