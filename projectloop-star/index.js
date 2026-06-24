// let s = "";
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

let space = " ";
let star = 5;

for (let i = 1; i <= star; i++) {
  let row = "";
  for (let j = 1; j <= star - i; j++) {
    row += space;
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}
