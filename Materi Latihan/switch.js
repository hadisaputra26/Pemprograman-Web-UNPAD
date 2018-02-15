var item = prompt("Masukan Makanan : \n (cth: nasi, danging, susu, hamburger, softdrink)");

switch (item) {
	case 'nasi':
	case 'daging':
	case 'susu':
	alert(item + " Adalah Makanan / Minuman Sehat");
	break;
	case 'humberger':
	case 'softdrink':
	alert(item + " Adalah Makanan / Minuman Sehat");
	break;
	default:
	alert("Makanan / Minuman Yang anda Masukan Salah");
	break;


}