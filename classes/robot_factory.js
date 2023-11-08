// Реалізуй 3 класи з успадкуванням.

// BaseRobot

// Конструктор приймає name, weight, coords, chipVersion та зберігає їх у об'єкті.
// Якщо координати не передано, встанови їх на 0.
// Методи goForward, goBack, goRight та goLeft приймають step (за замовчуванням 1) та переміщують робота на step у відповідному напрямку.
// Метод getInfo повертає рядок у форматі Robot: %name%, Chip version: %chipVersion%, Weight: %weight%.
// FlyingRobot

// Успадковує від BaseRobot.
// Конструктор приймає ті ж аргументи, що й BaseRobot, і передає їх у батьківський.
// Може працювати з координатою z за допомогою методів goUp та goDown.
// DeliveryDrone

// Успадковує від FlyingRobot.
// Конструктор додатково приймає maxLoadWeight та currentLoad (зі значенням null за замовчуванням) та зберігає їх.
// Має метод hookLoad, який приймає об'єкт cargo та зберігає його у властивості currentLoad, якщо вона порожня, і вага cargo.weight не перевищує maxLoadWeight дрона.
// Якщо у дрона вже є currentLoad, не змінюй його.
// Має метод unhookLoad, який встановлює null у властивості currentLoad.
// DeliveryDrone {
//   name: string
//   weight: number
//   chipVersion: number
//   maxLoadWeight: number
//   currentLoad: null || {
//     weight: number
//     description: string
//   }
//   coords: {
//     x: number
//     y: number
//     z: number
//   }
// }

class BaseRobot {
  constructor (name, weight, coords, chipVersion) {
    this.name = name;
    this.weight = weight;

    this.coords = Object.assign(
      {
        x: 0, y: 0
      }, coords);
    this.chipVersion = chipVersion;
  }

  goForward(step = 1) {
    this.coords.y += step;
  }

  goBack(step = 1) {
    this.coords.y -= step;
  }

  goLeft(step = 1) {
    this.coords.x -= step;
  }

  goRight(step = 1) {
    this.coords.x += step;
  }

  getInfo() {
    return 'Robot: ' + this.name
    + ', Chip version: ' + this.chipVersion
    + ', Weight: ' + this.weight;
  }
}

class FlyingRobot extends BaseRobot {
  constructor(name, weight, coords, chipVersion) {
    super(name, weight, coords, chipVersion);
    this.coords = Object.assign(
      {x: 0, y: 0, z:0 },
      coords
    )
  }

  goUp(step = 1) {
    this.coords.z += step;
  }

  goDown(step = 1) {
    this.coords.z -= step;
  }
}

class DeliveryDrone extends FlyingRobot {
  constructor(
    name,
    weight,
    coords = { x: 0, y: 0, z: 0 },
    chipVersion,
    maxLoadWeight,
    currentLoad = null
  ) {
    super(name, weight, (coords = { x: 0, y: 0, z: 0 }), chipVersion);
    this.maxLoadWeight = maxLoadWeight;
    this.currentLoad = currentLoad;
  }

  hookLoad(cargo) {
    // приймає об'єкт cargo та зберігає його у властивості currentLoad, якщо вона порожня,
    // і вага cargo.weight не перевищує maxLoadWeight дрона.
    if (!this.currentLoad && cargo.weight <= this.maxLoadWeight) {
      this.currentLoad = cargo;
    }
  }

  unhookLoad() {
    this.currentLoad = null;
  }
}

// const misha = new BaseRobot('Misha', 70, {x: 1, y: 2, z:3}, 2.0, 85);

// console.log(misha);
const position = { x: 0, y: 0 };
const cargo = {
  weight: 57,
  description: "Some cargo",
};

const robot = new DeliveryDrone("Alon", 26, position, 1.6, 78, cargo);

console.log(robot.maxLoadWeight);
