function checkWord(word) {
  return word.split("").reverse().join("").toLowerCase() == word.toLowerCase() ? `Слово ${word} является палиндромом` : `Слово ${word} не является палиндромом`;
}

console.log(checkWord("Довод"));
console.log(checkWord("Сантимент"));
