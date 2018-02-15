// Object Literal

var mhs = {
	nama : "hadi",
	nrp : '1234567',
	email : "hadisaputra26@gmail.com",
	jurusan : "sistem informasi"
}

// Function declaration
function membuatObject(nama, nrp, email, jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs1 = membuatObject("hadi","123456","hadisaputra26@gmail.com","teknik informatika");

// Constraction
function Mahasiswa(nama, nrp, email, jurusan){
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs2 = new Mahasiswa("saputra","9865332","putra@gmail.com","sistem informatika");