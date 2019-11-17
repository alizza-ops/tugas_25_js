const pengurutanArray = function (){

var angka=[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : "+angka);
angka=angka.sort();
console.log("Ascending : "+angka);
angka=angka.reverse();
console.log("Descending : "+angka);

angka=angka.filter(function(element){
	return element>10;
});

console.log("Filter > 10 : "+angka);

}
pengurutanArray();