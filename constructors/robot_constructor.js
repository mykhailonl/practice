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
 * @returns {Robot}
 */
function Robot(name) {
  this.name = name;
  this.coords = {
    x: 0,
    y: 0,
  }
}

Robot.prototype.goForward = function() {
  this.coords.y += 1;

  return this;
}
Robot.prototype.goBack = function() {
  this.coords.y -= 1;

  return this;
}
Robot.prototype.goRight = function() {
  this.coords.x += 1;

  return this;
}
Robot.prototype.goLeft = function() {
  this.coords.x -= 1;

  return this;
}

const dasha = new Robot('Dasha');

console.log(dasha)

// write code here
