// Напиши функцію processArray, яка приймає масив items
// та функцію callback. Запусти callback для кожного елемента
//  масива, і результат поклади в масив items замість цього елемента.
// Повертати нічого не потрібно, просто зміни масив items.
// 

function processArray(items, callback) {
  // write code here
  for (let i = 0; i < items.length; i++) {
    // console.log(callback(item));
    if (callback(items[i])) {
      items[i] = true;
    } else {
      items[i] = false;
    }
  }
}

const queue = [
  { type: "robot" },
  { type: "robot" },
  { type: "robot" },
  { type: "dog" },
  { type: "robot" },
];

const isRobot = (robot) => {
  if (robot.type === "robot") {
    return true;
  }

  return false;
};

processArray(queue, isRobot);

console.log(queue);