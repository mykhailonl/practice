// Додай до всіх рядків метод truncate, який повертає обрізаний рядок та приймає об'єкт options з наступними необов'язковими властивостями:

// length - максимальна довжина рядка після скорочення (30 за замовчуванням)
// omission - текст, який буде вставлено замість видаленого (за замовчуванням ...)
// separator - рядок, показує місця де можна розрізати текст (порожній, якщо не передано інше).
// Наприклад, якщо передали 1 пробіл - то ділимо тільки по пробілах (тобто цілі слова), якщо крапка - то на цілі речення.
// Приклад:

// const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
// text.truncate() === 'Lorem ipsum dolor sit amet,...'
// text.truncate({ length: 20, omission: ' more...' }) === 'Lorem ipsum  more...'
// text.truncate({ length: 10, separator: ' ' }) === 'Lorem...'

String.prototype.truncate = function (options) {
  const defaultOptions = {
    length: 30,
    omission: '...',
    separator: '',
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const { length, omission, separator } = mergedOptions;

  let newString = '';

  if (this.length === length) {
    return this;
  }

  const words = this.split(separator);
  console.log(words);
  let currentLength = 0;

  for (const word of words) {
    if (currentLength + word.length + omission.length <= length) {
      if (!newString) {
        newString += word;
        currentLength += word.length;
      } else {
        newString += separator;
        newString += word;
        currentLength += separator.length;
        currentLength += word.length;
      }
    } else {
      newString += omission;
      break;
    }
  }

  console.log(currentLength);

  return newString;
};

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna";
console.log(
  text.truncate({
    length: 18,
    separator: " ",
  })
);
