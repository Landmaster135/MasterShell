# --- utf8 coding ---

read -p "input ABSOLUTE pathname: " path
cd "${path}"

echo "------------- SUB DIRECTORIES -------------"
echo "$(ls)"

# editable including space
for f in * ; do mv "$f" "${f/ 1/}" ; done

# not editable including space
# for f in * ; do mv "$f" "${f# 1}" ; done
# for f in * ; do mv "$f" "${f#' 1'}" ; done

# not editable including space
# for f in `ls` ; do mv "$f" "${f#' 1'}" ; done
exit
