var kata = prompt("Masukan Sebuah Kata tanpa Spasi ");
var comp = Math.floor(Math.random()*kata.length);
var splits = kata.split('');
var hurufKata = splits[comp];
var kesempatan = 5;
var arr = [];

while(kesempatan > 0){
	if(kesempatan == 5){
		var tebakHuruf = prompt("Dari Kata [ " +kata+ " ] Huruf Apakah Yang Akan Muncul");
	} else {
		var tebakHuruf = prompt("Dari Kata [ " +kata+ " ] Huruf Apakah Yang Akan Muncul\n"+"Kata Yang Telah Dimasukan [ "+arr.join(" - ")+" ]");
	}
	arr.push(tebakHuruf);
	kesempatan--

	if(tebakHuruf == hurufKata){
		alert("Tebakan Anda Benar \nHuruf yang muncul adalah [ "+hurufKata+" ]");
		kesempatan = 0;
	}else if(kesempatan > 0){
		alert("Maaf Tebakan Anda Salah \nKesempatan anda tinggal "+kesempatan+"x Lagi");
	}else if(kesempatan == 0){
		alert("Maaf Kesempatan Anda telah habis \nHurus yang muncul adalah [ "+hurufKata+" ]");
	}
}
alert("Terimakasih Telah Bermain dengan Kami");