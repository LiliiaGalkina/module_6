//Задание 6.6.3

function makeArray(num) {
        const arr = [];
        for (let i = 0; i <= num; i++) {
            arr.push(i);
        }
        return arr;
        }

  let digit = prompt("Введите число:");

        if (digit === null) {
            alert('Действие отменено пользователем.');
        } else {digit = parseInt(digit);
        }

        if (isNaN(digit) || digit < 0) {
            alert('Вы ввели некорректное или отрицательное число!');
        } else {
            console.log(makeArray(digit));
        }
