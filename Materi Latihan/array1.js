// Method Length
// var arr = ["hadi","putra","tika","masya"];
// for (var i = 0; i < arr.length; i++) {
// 	console.log("Nama Mahasiswa ke " + (i+1) + " Adalah " + arr[i]);
// }

//Method Join
// var arr = ["hadi","putra","tika","masya"];
// console.log(arr.join(' - '));

//Method Push & Pop
// var arr = ["hadi","putra","tika","masya"];
// arr.push("susi","doddy");
// arr.pop();
// console.log(arr.join(" - "));

// Method Unshift & Shift
// var arr = ["hadi","putra","tika","masya"];
// arr.unshift("doddy");
// arr.shift();
// console.log(arr.join(" - "));

//Method Splice
// var arr = ["hadi","putra","tika","masya"];
// arr.splice(2,2,"doddy","chika");
// console.log(arr.join(" - "));

//Method Slice
// var arr = ["hadi","putra","tika","masya","doddy","chika"];
// var arr2 = arr.slice(1,3);
// arr2.push("ain","albedo");

// console.log(arr2.join(" - "));
// console.log("Jumlah Index Array : " + arr2.length);
// console.log("Index Ke 4 : " + arr2[3]);
// console.log("menggunakan Slice " + arr2.join(" - "));
// console.log("Menggunakan Array Biasa " + arr.join(" - "));

//==========================================================
// var arr = ["hadi","putra","tomy"];
// alert("Index Awal " + arr.join(" - "));
// var i = parseInt(prompt("Masukan Index awal :"));
// var j = parseInt(prompt("Masukan Index yang akan di hapus"));
// var h = prompt("Masukan Nama :");

// arr.splice(i,j,h);

// alert(arr.join(" - "));
// console.log(arr.join(" - "));
//============================================================

// Method foeEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["hadi","putra","tika","susi"];

// nama.forEach(function(e,f){
// 	console.log("nama mahasiswa :" + e + " urutan ke " + (f+1));
// });

// angka.forEach(function(e){
// 	console.log(e);
// });

//================================================================

//Method Map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
// 	return e*10;
// });
// console.log(angka2.join(" - "));

// Method Sort
// var angka1 = [1,2,7,3,6,4,8,5];
// console.log("Sebelum di urutkan : " + angka1.join("-"));
// angka1.sort();
// console.log("setelah di urutkan : " + angka1.join("-"));

// var angka2 = [1,8,3,9,6,10,23,12,45,2,61,34,21,46];
// console.log("Sebelum diurutkan : " + angka2.join(" - "));
// angka2.sort(function(a,b){
// 	return a-b;
// });
// console.log("Setelah diurutkan : " + angka2.join(" - "))

//=============================================================

//Method Find
// var angka = [1,8,3,9,6,10,23,12,45,2,61,34,21,46];
// var angka2 = angka.find(function(a){
// 	return a > 5;
// });
// console.log(angka2);

//Method Filter
var angka = [1,8,3,9,6,10,23,12,45,2,61,34,21,46];
var angka2 = angka.filter(function(a){
	return a > 5;
});
console.log("Angka yang belum di urutkan : " + angka2.join(" - "));

var angka3 = angka2.sort(function(a,b){
	return a-b;
});
console.log("Angka yang sudah diurutkan : " + angka3.join(" - "));