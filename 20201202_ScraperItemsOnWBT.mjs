
// this statement can realize.
var reader = new FileReader();
var first_number = 17;
var array_number = [];
for (let i=0; i<18; i++){
    array_number.push(17 + i * 18);
}

var data = [];
array_number.forEach(function(value) {
    data.push([...document.querySelectorAll('td')][value].innerText);
});
var length_of_data = 0
var sep = "\t";
console.log(`${data[0+length_of_data]}${sep}${data[1+length_of_data]}${sep}${data[2+length_of_data]}${sep}`+
            `${data[3+length_of_data]}${sep}${data[4+length_of_data]}${sep}${data[5+length_of_data]}${sep}`+
            `${data[6+length_of_data]}${sep}${data[7+length_of_data]}${sep}${data[8+length_of_data]}${sep}`+
            `${data[9+length_of_data]}${sep}${data[10+length_of_data]}${sep}${data[11+length_of_data]}${sep}`+
            `${data[12+length_of_data]}${sep}${data[13+length_of_data]}${sep}${data[14+length_of_data]}${sep}`+
            `${data[15+length_of_data]}${sep}${data[16+length_of_data]}${sep}${data[17+length_of_data]}${sep}`
            );

