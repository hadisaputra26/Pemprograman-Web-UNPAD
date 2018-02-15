var s = '';
var t = '';
// for (var i = 10; i >= 1; i--){

// 	for(var j = 1; j <= i; j++){
// 		s = s + '*';
// 	}

// 	s = s + '\n';

// s = s + '*';
// S += '*';

//=======================
//      PAPAN CATUR
//=======================

//  var x = prompt("Masukan Jumlah Yang anda inginkan: ");


// for (var i = x; i >= 1; i--){

// 	if(i % 2 == 0){

// 		for(var j = 1; j <= 10; j++){

// 		s = s + '#';
// 		s = s + ' ';
// 	}

// 	s = s + '\n';

// 	}else{

// 		for(var j = 1; j <= 10; j++){

// 		s = s + ' ';
// 		s = s + '#';
// 	}

// 	s = s + '\n';

// 	}


// }

//=========================================================


var x = prompt("Masukan Jumlah Yang anda inginkan: ");

if(x >= 10){

	for (var i = x; i >= 1; i--){

	if(i % 2 == 0){

		for(var j = 1; j <= 10; j++){

		s = s + '#';
		s = s + ' ';
	}

	s = s + '\n';

	}else{

		for(var j = 1; j <= 10; j++){

		s = s + ' ';
		s = s + '#';
	}

	s = s + '\n';

	}


	}

} else{


alert("Nilai Yang anda Madukan Salah");
}



console.log(s);


