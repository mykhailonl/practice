/*
Створи функцію formatMessage, яка приймає рядок message зі словами розділеними одним пробілом та callback.
Кожне слово рядка message потрібно пропустити через callback,
як через м'ясорубку, результат записати в новий рядокі повернути його.

Приклади:

function capitalize (word) {
  return word[0].toUpperCase() + word.slice(1);
}
formatMessage('this is sparta', capitalize);
// 'This Is Sparta'
const shorten = word => word.slice(0, 2);
formatMessage('this is sparta', shorten);
// 'th is sp'
*/

/**
 * @param {string} message
 * @param {Callback} callback
 *
 * @returns {string}
 */
function formatMessage(message, callback) {
  const wordsArr = message.split(' ');
  let resultStr = '';

  for (const word of wordsArr) {
    if (!resultStr) {
      resultStr += callback(word)
    } else {
      resultStr += ` ${callback(word)}`
    }
  }

  return resultStr;
}

function capitalize (word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(formatMessage('this is sparta', capitalize));
// 'This Is Sparta'
const shorten = word => word.slice(0, 2);
console.log(formatMessage("this is sparta", shorten));
// 'th is sp'
