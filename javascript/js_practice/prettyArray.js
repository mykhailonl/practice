// Гарним вважається такий масив, в якому для кожного числа n, десь в цьому ж масиві є хоча б одне з чисел
// n - 1 або n + 1.
// Наприклад, масив [2, 10, 9, 3] - гарний, бо для 2 є 3, для 10 є 9, для 9 є 10, а для 3 є 2.
// І масив [5, 6, 7] також є гарним, бо для 5 і 7 є 6, а для 6 є і 5 і 7.
// А ось масив [6, 7, 1] НЕ є гарним, бо для 1 немає ані 0 ані 2.
// Напиши функцію isArrayPretty, яка приймає масив чисел numbers та повертає true, якщо він гарний,
// інакше false. Порожній масив НЕ є гарним.
function isArrayPretty(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  for (const number of numbers) {
    const minusOne = number - 1;
    const plusOne = number + 1;

    if (!numbers.includes(minusOne) && !numbers.includes(plusOne)) {
      return false;
    }
  }

  return true;
}

console.log(isArrayPretty([2, 10, 9, 3]))
console.log(isArrayPretty([6, 7, 1]))
console.log(isArrayPretty([3, 2, 10]))
console.log(isArrayPretty([]))
