
var game = true;

while (game) {	
	//Menangkap pilihan Player
	var p = prompt("Pilih : gajah, semut, orang");

	// Menangkap pilihan Komputer
	// Membangkitkan Bilangan random
 
	var comp = Math.random();

	if (comp < 0.33) {
		comp = "gajah";
	} else if (comp >= 0.33 && comp < 0.67) {
		comp = "semut";
	} else {
		comp = "orang";
	}

	// console.log(comp);

	var hasil = " ";
	//Menentukan rules

	if (p == comp) {

		hasil = "seri";

	} else if ( p == "gajah") {

		// if (comp == "orang"){

		// 	hasil = "menang";
		// } else {
		// 	hasil = "kalah";
		// }

		hasil = (comp == "orang") ? "menang" : "kalah";

	} else if (p == "orang"){

		hasil = (comp == "semut") ? "menang" : "kalah";

	} else if (p == "semut") {

		hasil = (comp == "gajah") ? "menang" : "kalah";

	} else {

		 hasil = "Memasukan pilihan yang salah";
	}

	//Tampilkan hasil

	alert("Kamu Memilih " + p + " Dan Komputer Memilih " + comp + "\n Maka Hasilnya Adalah " + hasil);

	game = confirm("Apa Anda Ingin Bermain Lagi :");

}

alert("Terimakasih Telah Bermain Bersama Kami");