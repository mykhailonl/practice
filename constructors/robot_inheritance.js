/**
 * @param {string} name
 *
 * @type Robot {
 *   name: string
 *   coords: {
 *     x: number
 *     y: number
 *   }
 * }
 *
 * @returns {Robot}
 */
function BaseRobot(name) {
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
}

BaseRobot.prototype.goForward = function () {
  this.coords.y += 1;

  return this;
};

BaseRobot.prototype.goBack = function () {
  this.coords.y -= 1;

  return this;
};

BaseRobot.prototype.goLeft = function () {
  this.coords.x -= 1;

  return this;
};

BaseRobot.prototype.goRight = function () {
  this.coords.x += 1;

  return this;
};

/**
 * @param {string} name
 * @param {number} maxTrunkCapacity
 *
 * @type { Robot } CargoRobot {
 *   trunk: {Array}
 *   maxTrunkCapacity: {number}
 * }
 *
 * @returns {CargoRobot}
 */
function CargoRobot(name, maxTrunkCapacity) {
  // keep this line to call BaseRobot constructor for each new CargoRobot
  BaseRobot.call(this, name);

  this.trunk = [];

  this.maxTrunkCapacity = maxTrunkCapacity;


}

// don't forget to inherit BaseRobot.prototype for CargoRobot.prototype
// write code here
Object.setPrototypeOf(CargoRobot.prototype, BaseRobot.prototype);

const dasha = new CargoRobot('Dasha');

console.log(dasha);

