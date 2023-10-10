// Напиши функцію makeSpyListener, яка створює та повертає функцію listener - ПЗ для робота.
// Функція listener має працювати наступним чином:
// Якщо її викликати передавши рядок, він має бути збережений в пам'яті робота
// Якщо її викликають без параметрів, треба повернути массив всіх записаних даних
// Якщо ми викличемо метод listener.clear(), необхідно стерти всі дані і повернути рядок Transferring data... Deleting data... Clear!.
// const listener = makeSpyListener();

// listener(); // []
// listener(`Mate Robot Factory is weird`);
// listener(`It’s a spy robot!!! Catch him!`);

// listener(); // [`Mate Robot Factory is weird`, `It’s a spy robot!!! Catch him!`]
// listener.clear(); // `Transferring data... Deleting data... Clear!`
// listener(); // []
function makeSpyListener() {
  let memory = [];

  function listener(data) {
    if (typeof data === "string") {
      memory.push(data);
    }

    if (!data) {
      return memory;
    }
  }

  listener.clear = () => {
    memory = [];

    return "Transferring data... Deleting data... Clear!";
  };

  return listener;
}

const listener = makeSpyListener();
listener(`Mate Robot Factory is weird`);
listener();
listener(`It’s a spy robot!!! Catch him!`);
console.log(listener.clear())