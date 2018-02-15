function Angkot(sopir, trayek, penumpang, kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;
	this.penumpangNaik = function(namaPenumpang){
		if(this.penumpang.length == 0){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
		} 
		for(var i = 0; i < this.penumpang.length; i++){
			if (this.penumpang[i] == undefined){
				this.penumpang[i] = namaPenumpang;
				return this.penumpang;
			} else if (this.penumpang[i] == namaPenumpang){
				console.log("Penumpang ("+ this.penumpang[i] + ")sudah naik");
				return this.penumpang;
			} else if (i <= this.penumpang.length && this.penumpang.length < 5){
				this.penumpang.push(namaPenumpang);
				return this.penumpang;
			} 
		}
		if (this.penumpang.length == 5){
				console.log("Maaf Angkot sudah Penuh");
		return this.penumpang;
		}
	}
	this.penumpangTurun = function(namaPenumpang, bayar){
		if (this.penumpang.length == 0){
			console.log("Angkot Masih Kosong");
			return false;
		}
		for(var i = 0; i < this.penumpang.length; i++){
			if(this.penumpang[i] == namaPenumpang){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}
}
var angkot1 = new Angkot("Doddy", ["jogja","solo"], [], 0);
var angkot2 = new Angkot("dika", ["jakarta","bandung"], [], 0);