// Створи функцію makeRandomizer, яка приймає масив з двох цілих чисел [start, end] (причому end >= start) та повертає функцію randomizer
// яка працюватиме наступним чином:
// при виклику randomizer повертає ціле число між start та end включно
// числа, що повертаються, не повинні повторюватися
// якщо унікальні цілі числа з діапазона закінчилися, поверни null
// const getRandom = makeRandomizer([1, 4]);

// getRandom() === 3;
// getRandom() === 4;
// getRandom() === 2;
// getRandom() === 1;
// getRandom() === null;
// getRandom() === null;
function makeRandomizer(numbers) {
  const allNumbers = [];
  for (let i = numbers[0]; i < numbers[1] + 1; i++) {
    allNumbers.push(i);
  }

  allNumbers.sort(() => Math.random() - 0.5);
  
  return () => {
    if (allNumbers.length === 1) {
      const number = allNumbers[0];
      allNumbers.splice(0, 1)
      return number;
    } else if (allNumbers.length === 0) {
      return null;
    } else {
      const number = allNumbers[1];
      allNumbers.splice(1, 1);
      return number;
    }
  }
}

const getRandom = makeRandomizer([1, 4]);

console.log(getRandom()) // 3;
console.log(getRandom()) // 4;
console.log(getRandom()) // 2;
console.log(getRandom()) // 1;
console.log(getRandom()) // null;
console.log(getRandom()) // null;