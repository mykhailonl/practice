// Створи функцію makeRobotAccountant, яка повертає функцію (нашого робота). Робот повинен працювати за шаблоном robot(4)(5) === 9.
// Перші 3 використання роботи працюють добре. Але потім всі парні виклики (4-й, 6-й, ...) повертають рядок Bzzz... Error!,
// а непарні - правильне значення.
// Приклад:
// const robot = makeRobotAccountant();

// robot(5)(6) === 11;
// robot(1)(3) === 4;
// robot(6)(6) === 12;
// robot(55)(16) === 'Bzzz... Error!';
// robot(55)(16) === 71;
// robot(55)(17) === 'Bzzz... Error!';
// robot(5)(17) === 22;
// robot(1)(1) === 'Bzzz... Error!';

function makeRobotAccountant() {
  let counter = 0;

  function accountant(number) {
    return (second) => {
      counter++;

      if (counter < 4) {
        return number + second;
      }else if (counter > 3 && counter % 2 === 0) {
        return "Bzzz... Error!";
      } else {
        return number + second;
      }
    }
  }

  return accountant;
}

const robot = makeRobotAccountant();

console.log(robot(1)(3))
console.log(robot(5)(6))
console.log(robot(6)(6)) 
console.log(robot(55)(16))
console.log(robot(47)(15))
console.log(robot(47)(15))
console.log(robot(47)(15))
console.log(robot(47)(15))
console.log(robot(47)(15))

