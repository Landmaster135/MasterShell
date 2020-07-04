# --- utf8 coding ---

cd /Users/$USER/Downloads

a=10
exp1=10
exp2=6

# limit of max calculation is...
# echo $((10**18))

# ${variable/target/replacing}

echo "------------- NAYUTA -------------"

# 10 exponentiations by 6
for ((i=0; i < $exp2; i++)); do
    echo $((a**exp1)) >>NAYUTA.txt
done

# 60 exponentiations by 1
b=10000000000
for ((i=0; i < $((exp2-1)); i++)); do
    b=${b/1/10000000000}
    echo $b >>NAYUTA.txt
done




exit