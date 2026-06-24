// let jmlhAngkot = 10;
// let angkotBeroperasi = 6;
// let noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   noAngkot++;
// }

// for (angkotRusak = 7; angkotRusak <= jmlhAngkot; angkotRusak++) {
//   console.log("Angkot No. " + angkotRusak + " Sedang Tidak Beroperasi");
// }
// for (angkotBeroperasi++; angkotBeroperasi <= jmlhAngkot; angkotBeroperasi++) {
//   console.log("Angkot No. " + angkotBeroperasi + " Sedang Tidak Beroperasi");
// }

// let jmlhAngkot = 10;
// let angkotBeroperasi = 6;
// let noAngkot = 1;

// for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   } else {
//     console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
//   }
// }

let jmlhAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
  } else if (noAngkot === 7 || noAngkot === 9 || noAngkot === 5) {
    console.log("Angkot No. " + noAngkot + " Sedang Beroperasi Lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
  }
}
