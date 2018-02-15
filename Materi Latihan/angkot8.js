// "hadi", "tika", undefined, "dody"
var penumpang = ["hadi", "tika", undefined, "dody"];
var tambahPenumpang = function(namaPenumpang, penumpang){
	// Untuk menambah penumpang apabila angkotnya masih kosong
	if (penumpang.length == 0){
		penumpang.push(namaPenumpang);
		return penumpang;
	} else {
		// Menelusiri Semua Kursi dari awal ke akhir
		for(var i = 0; i < penumpang.length; i++){
			// Untuk mengecek kursi yang kosong
			if(penumpang[i] == undefined){
				penumpang[i] = namaPenumpang;
				return penumpang;
			// Untuk Mengecek nama penumpang yang sama
			} else if (penumpang[i] == namaPenumpang){
				console.log("Penumpang yang bernama " + penumpang[i] + " Telah berada didalam angkot \n dia berada di kursi ke " + (i+1));
				return penumpang;
			// untuk menambah penumpang di dalam angkot
			} else if ( i == penumpang.length - 1){
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
};
var hapusPenumpang = function(namaPenumpang, penumpang){
	if(penumpang.length == 0){
		console.log("Maaf Angkot masih kosong");
	} else {
		for(var i = 0; i < penumpang.length; i++){
			// Untuk menghapus nama penumpang menjadi undefined
			if(namaPenumpang == penumpang[i]){
				penumpang[i] = undefined;
				return penumpang;
			// Menampilkan apabila tidak ada nama penumpang didalam angkot
			 } else if (i == penumpang.length - 1){
			 	console.log("Maaf, tidak ada menumpang yang bernama (" + namaPenumpang + ") didalam angkot");
			 	return penumpang;
			 }
		}
	}
};