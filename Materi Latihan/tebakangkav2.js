var kesempatan = "5";
var comp = Math.floor(Math.random() * 101);
var hasil = "";

// Rules Permainan

alert("Selamat Datang Di permainan Tebak Angka \nTebak Angka 1 sampai 100 \nAnda Hanya Mempunyai 5x Kesempatan");

	while(kesempatan > 0){
		var nilai = prompt("Berapa Angkanya :");
		if (nilai == comp){
			hasil = "BENAR";
			kesempatan = "0";
		} else if (nilai > comp){
			hasil = "Terlalu TINGGI";
		} else if (nilai < comp){
			hasil = "Terlalu RENDAH";
		} 
		kesempatan--;
		if(kesempatan <= 5 && kesempatan > 0){
			alert("Angka Yang Anda Masukan " + hasil + "\nKesempatan Anda Tinggal " + kesempatan + "x lagi");
		}else if (kesempatan == 0) {
			alert("ANDA KALAH \nMaaf kesempatan Anda Telah Habis ");
			alert("Angka Yang Di Cari Adalah " + comp);
		}else {
				alert("Tebakan Anda Benar " + hasil + "\n Angka Yang Di Cari adalah " + comp);
		}

	}

alert("Terilakasih Telah Bermain dengan kami");