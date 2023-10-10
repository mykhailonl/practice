'use strict';

const candies1 = ['KitKat', 'Nuts', 'Lion', 'Mars', 'Snickers', 'Bounty', 'Mars'];
const candies2 = ['Nuts', 'Nuts', 'Nuts', 'Snickers', 'Snickers', 'Snickers', 'Mars'];

const containsO = candy => candy.includes('o');
const isLessThan5 = candy => candy.length < 5;

function filter (array, check) {
  const result = [];

  for (const ch of array) {
    if (check(ch)) {
      result.push(ch);
    }
  }

  return result;
}

console.log(
  filter(candies1, containsO)
  ); // ['Lion', 'Bounty']
console.log(
  filter(candies2, isLessThan5)
  ); // ['Nuts', 'Nuts', 'Nuts', 'Mars']