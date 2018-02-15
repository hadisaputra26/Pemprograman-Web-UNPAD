var kesempatan = 5;
var comp = Math.floor(Math.random()*10);
var angkaComp = comp + 1;
var hasil = "";

// console.log(angkaComp);

// Rule
while(kesempatan > 0){
	var angka = prompt("Masukan Angka 1 - 10 : ");
	if (angka == angkaComp){
		hasil = "Benar";
		kesempatan = 1;
	} else if (angka > angkaComp){
		hasil = "Terlalu Tinggi";
	} else if (angka < angkaComp){
		hasil = "Terlalu Rendah";
	}
	kesempatan--
	if(kesempatan > 0){
	alert("Angka Yang anda Masukan " + hasil + "\nKesempatan Anda Tinggal " + kesempatan + "x lagi");
	}else if (kesempatan == 0) {
		alert("Maaf Kesempatan Anda Telah Habis \nAngka Yang Di Cari Adalah " + angkaComp);
	}else if (angka == angkaComp){
		alert("Jawaban Anda Benar nilai yang dicari adalah " + angkaComp);
	} 
	
}
alert("Terimakasih Telah Bermain Bersama Kami");