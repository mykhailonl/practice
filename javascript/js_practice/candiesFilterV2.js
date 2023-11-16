'use strict';

const candies1 = [
  'KitKat', 'Nuts', 'Lion',
  'Mars', 'Snickers', 'Bounty', 'Mars'
];

function filter (candies, isGoodEnough) {
  const result = [];

  for (const candy of candies) {
    if (isGoodEnough(candy)) {
      result.push(candy);
    }
  }

  return result;
}

function createSizeFilter (size) {
  
}

const isUpTo4 = createSizeFilter(4);
const isUpTo6 = createSizeFilter(6);

console.log(
  filter(candies1, isUpTo4), // ['Nuts', 'Lion', 'Mars', 'Nuts']
  filter(candies1, isUpTo6), 
  // ['KitKat', 'Nuts', 'Lion', 'Mars', 'Bounty', 'Nuts']
)