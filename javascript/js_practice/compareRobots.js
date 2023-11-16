const msg = 'tpircsavaJ si eht egaugnal fo erutuf';

function reverseMessage(message) {
  const msgArray = message.split(' ');
  let resultMsg = '';

  for (const word of msgArray) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    console.log(reversedWord);

    resultMsg = resultMsg.concat(' ')
  }

  return resultMsg;
}