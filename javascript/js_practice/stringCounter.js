const string = 'ahahahahahaaaaaaha'; // 6
const particle = 'ha';

function stringChecker(str, part) {
  let globalCounter = 0;

  const partLength = part.length;
  console.log(partLength);
  const partsArr = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === particle[0] && string[i+1] === particle[1]) {
      console.log('ha')
    }
  }
  return counter;
}

stringChecker(string, particle);