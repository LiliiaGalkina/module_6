//Задание 6.6.3

function makeArray(num) {
  const arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

let digit = +prompt("Введите число:");

console.log(makeArray(digit));
