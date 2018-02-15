const judul = document.getElementById("judul");
const p = document.getElementsByTagName('p');

// mengubah element menggnakan java script
judul.style.color = 'red';
judul.style.textAlign = "center";
judul.style.fontStyle = "italic";
judul.style.fontFamily = "oswald";
judul.innerHTML = "Hadi Saputra";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


for(var i = 0; i<4; i++){
	let warna = getRandomColor();
	
	judul.style.backgroundColor = warna;
	p[i].style.backgroundColor = warna;
}

p[0].innerHTML = "ini pakai javascript";

