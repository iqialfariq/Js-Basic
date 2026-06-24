// let confir = true;
// while (confir) {
// Game logic here

//   Player input
// let playerChoice = prompt("Pilih: gajah, semut, atau orang");

// let comp = Math.random();
// // computer input
// if (comp < 0.34) {
//   comp = "gajah";
// } else if (comp >= 0.34 && comp < 0.67) {
//   comp = "semut";
// } else {
//   comp = "orang";
// }

// rules
//   let hasil = "";

//   if (playerChoice === comp) {
//     hasil = "Seri!";
//   } else if (playerChoice === "gajah") {
//     hasil = comp == "orang" ? "Menang" : "Kalah";
//   } else if (playerChoice === "semut") {
//     hasil = comp == "orang" ? "Kalah" : "Menang";
//   } else if (playerChoice === "orang") {
//     hasil = comp == "semut" ? "Menang" : "Kalah";
//   } else {
//     hasil = "Pilihan tidak valid!";
//   }

//   alert(`Kamu memilih: ${playerChoice}\nKomputer memilih: ${comp}\nHasil: ${hasil}`);
//   confir = confirm("ingin bermain lagi?");
// }

// alert("Terima kasih sudah bermain!");

// tebak angka game next

let tanya = true;

while (tanya) {
  let playerChoice = prompt("Pilih: gajah, semut, atau orang");

  let comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }

  let hasil = "";

  if (playerChoice === comp) {
    hasil = "Kamu Seri!";
  } else if (playerChoice === "gajah") {
    hasil = comp === "orang" ? "Kamu Menang!" : "Kamu Kalah!";
  } else if (playerChoice === "semut") {
    hasil = comp === "orang" ? "Kamu Kalah!" : "Kamu Menang!";
  } else if (playerChoice === "orang") {
    hasil = comp === "semut" ? "Kamu Menang!" : "Kamu Kalah!";
  } else {
    hasil = "Pilihan kamu tidak valid!";
  }

  alert(`Kamu memilih: ${playerChoice}\nKomputer memilih: ${comp}\nHasil: ${hasil}`);

  tanya = confirm("Ingin bermain lagi?");
}

alert("Terima kasih sudah bermain!");
