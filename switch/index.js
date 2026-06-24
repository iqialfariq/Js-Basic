let item = prompt("masukan nama makanan / minuman: \n cth: makanan: nasi, daging, sayuran, humberger, pizza, spaghetti. minuman: susu, jus, air putih, soda, popice, bir ");

switch (item) {
  case "nasi":
  case "daging":
  case "sayuran":
    alert("makanan sehat lima sempurna");
    break;
  case "humberger":
  case "pizza":
  case "spaghetti":
    alert("makanan tidak sehat");
    break;
  case "susu":
  case "jus":
  case "air putih":
    alert("minuman sehat");
    break;
  case "soda":
  case "popice":
  case "bir":
    alert("minuman tidak sehat");
    break;
  default:
    alert("yang anda masukan salah");
    break;
}
