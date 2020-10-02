# --- utf8 coding ---
#!/bin/bash
echo ${BASH_SOURCE[0]}

if [ $# -ne 0 ]; then
  echo "Number of variable is wrong."
  exit 0
fi

# ! CHECK start ! ---------------------
array=(3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39)
# ! CHECK end ! ---------------------

cd /Users/$USER/Downloads

jsFile='JSforBamiyanMenu.mjs'
jsHead1='var reader = new FileReader();'
jsHead2='console.log('

echo $jsHead1 >>$jsFile

jsTail=');'
js1='[...document.querySelectorAll('
js2=')]['
js3='].innerText'

# Generate script to get menu
echo $jsHead2 | tr -d '\012' >>$jsFile
for i in ${array[@]}; do
    if [ $i -eq ${array[$((${#array[@]}-1))]} ]; then
        echo $js1\''p'\'$js2$i$js3 | tr -d '\012' >> $jsFile
    else
        echo $js1\''p'\'$js2$i$js3',' | tr '\012' ' ' >> $jsFile
    fi
    echo $i
done
echo $jsTail >>$jsFile

# Generate script to get price
echo $jsHead2 | tr -d '\012' >>$jsFile
for i in ${array[@]}; do
    if [ $i -eq ${array[$((${#array[@]}-1))]} ]; then
        echo $js1\''p'\'$js2$(($i + 1))$js3 | tr -d '\012' >> $jsFile
    else
        echo $js1\''p'\'$js2$(($i + 1))$js3',' | tr '\012' ' ' >> $jsFile
    fi
    echo $i
done
echo $jsTail >>$jsFile

# Execute that Javascript code in this site with Developper tool.
# https://www.skylark.co.jp/bamiyan/menu/menu_category.html?cid=240

exit 0



