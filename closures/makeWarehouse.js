// Створи функцію makeWarehouse, яка приймає необов'язковий параметр goods (масив чисел з вагою кожного товару, що вже зберігається на складі)
// і повертає функцію warehouse.
// Якщо викликати warehouse без параметрів, вона поверне об'єкт статистики з полями totalWeight і averageWeight - загальна та середня вага
// всіх товарів на складі (закруглена до найближчого цілого).
// Якщо передати декілька чисел, то warehouse додасть їх до загальної ваги всього, що вже зберігається на складі.
// const  firstWarehouse = makeWarehouse([10, 20])
// firstWarehouse(); // { totalWeight: 30, averageWeight: 15 }

// firstWarehouse(10, 20, 30, 40, 10, 10);
// firstWarehouse(56, 44);

// firstWarehouse(); // { totalWeight: 250, averageWeight: 25 }

// const secondWarehouse = makeWarehouse([10])
// secondWarehouse() // { totalWeight: 10, averageWeight: 10 }

// firstWarehouse() // { totalWeight: 250, averageWeight: 25 }
function makeWarehouse(goods) {
  const warehouseStat = {};
  const sklad 
    = goods 
    ? [...goods]
    : [];

  function warehouse(...numbers) {
    // warehouse.push(...goods);
    // console.log(numbers)

    if (numbers) {
      // console.log(numbers)
      sklad.push(...numbers);
    }

    warehouseStat.totalWeight =
      sklad.length !== 0 ? sklad.reduce((acc, cur) => acc + cur, 0) : 0;

    warehouseStat.averageWeight =
      sklad.length !== 0
        ? Math.round(warehouseStat.totalWeight / sklad.length)
        : 0;

    if (numbers.length === 0) {
      return warehouseStat;
    }
  }

  return warehouse;
}


const  firstWarehouse = makeWarehouse([10, 20])
console.log(firstWarehouse()); // { totalWeight: 30, averageWeight: 15 }

console.log(firstWarehouse(10, 20, 30, 40, 10, 10));
console.log(firstWarehouse(56, 44));

console.log(firstWarehouse()); // { totalWeight: 250, averageWeight: 25 }

// const secondWarehouse = makeWarehouse([10])
// console.log(secondWarehouse()) // { totalWeight: 10, averageWeight: 10 }

// console.log(firstWarehouse()) // { totalWeight: 250, averageWeight: 25 }