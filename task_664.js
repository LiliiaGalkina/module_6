//Задание 6.6.4

let str = "X";
let num = 0;
for (let i = 1; i <= 3; i++) {
  let string = "";
  for (let j = 1; j <= 3; j++) {
    string += j != 3 ? `${str} ` : str;
    str = str === "X" ? "O" : "X";
  }
  console.log(string);
}
