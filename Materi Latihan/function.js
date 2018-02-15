
// penggunaan function biasa
function jumlahVolumeKubus(a,b){
	var kubus1, kubus2, total;
	kubus1 = a * a * a;
	kubus2 = b * b * b;
	total = kubus1+kubus2;
	return total;

}

//penggunaan function dengan array
function tambah(){

	var hasil = 0;
	for(var i = 0; i < arguments.length; i++){
		hasil += arguments[i];

	}

	return hasil;

}


var coba = tambah(10,20,50);
console.log(coba)

// var i = parseInt(prompt("Masukan Nilai Satu"));
// var j = parseInt(prompt("Masukan Nilai dua"));

// alert("Hasil Dari Volume Kubusnya Adalah " + jumlahVolumeKubus(i,j));


// console.log("Hasil Dari Volume Kubusnya Adalah " + jumlahVolumeKubus(8,3));