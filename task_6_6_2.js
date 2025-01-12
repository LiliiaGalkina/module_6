//Задание 6.6.2

function uniqueArray(arr) {
  return Array.from(new Set(arr));
}

console.log(
  uniqueArray([1, 2, 3, 1, 5, 4, 2, 3, 5, "they", "don't", "know", "that", "we", "know", "that", "they", "know"]));

