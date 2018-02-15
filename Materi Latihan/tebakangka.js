var kesempatan = "3";
var comp = Math.random();
var hasil = "";
var mainLagi = true;




// Deklarasi Angka 1 - 10

if (comp > 0.11 && comp <= 0.21){

	comp = "1";

} else if ( comp > 0.21 && comp <= 0.31){

	comp = "2";

} else if ( comp > 0.31 && comp <= 0.41) {

	comp = "3";

} else if ( comp > 0.41 && comp <= 0.51) {

	comp = "4";

} else if ( comp > 0.51 && comp <= 0.61) {

	comp = "5";

} else if ( comp > 0.61 && comp <= 0.71) {

	comp = "6";

} else if ( comp > 0.71 && comp <= 0.81) {

	comp = "7";

} else if ( comp > 0.81 && comp <= 0.91) {

	comp = "8";

} else if (comp > 0.91 && comp <= 0.95){

	comp = "9";

}else {

	comp = "10";
}


// Rules Permainan


alert("Selamat Datang Di permainan Tebak Angka \n Tebak Angka 1 sampai 9");


	while(kesempatan <= 3 && kesempatan > 0){


		var nilai = prompt("Berapa Angkanya :");

		if (nilai == comp){

			hasil = "BENAR";
			kesempatan = "0";

		} else if (nilai > comp){

			hasil = "Terlalu TINGGI";

		} else if (nilai < comp){

			hasil = "Terlalu RENDAH";

		} else {

			hasil = "Nilai Yang anda masukan Salah";
		}

		kesempatan--;

		if(kesempatan <= 3 && kesempatan > 0){

			alert("Angka Yang Anda Masukan " + hasil + "\nKesempatan Anda Tinggal " + kesempatan + "x lagi");

		}else if (kesempatan == 0) {

			alert("ANDA KALAH \nMaaf kesempatan Anda Telah Habis ");
			alert("Angka Yang Di Cari Adalah " + comp);

		}else {

				alert("Tebakan Anda Benar " + hasil + "\n Angka Yang Di Cari adalah " + comp);
		}

	}


alert("Terilakasih Telah Bermain dengan kami");