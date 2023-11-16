function toArrayOfDigits(n) {
  const stringVer = "" + n;
  const resultedArr = [];
  let index = 0;

  for (let i = stringVer.length - 1; i >= 0; i--) {
    resultedArr[index] = Number(stringVer[i]);
    index++;
  }

  return resultedArr;
}


console.log(toArrayOfDigits(654321))