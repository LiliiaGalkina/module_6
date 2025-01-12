//Задание 6.6.3

function makeArray(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

let digit = +prompt("Введите число:");

console.log(makeArray(digit));
