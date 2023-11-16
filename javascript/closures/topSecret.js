// Створи функцію makeSecret, яка приймає рядки secret та password і повертає функцію storage з секретом.
// при звичайному виклику storage повертає рядок Absolutely not a secret thing
// якщо викликати метод storage.getSecret і передати вірний пароль, то він поверне таємне значення secret
// якщо пароль невірний, то результат буде Wrong password!
// якщо пароль було введено невірно 3 рази поспіль, то метод блокується і всі наступні виклики повертатимуть null(навіть для правильного пароля)
// якщо ДО блокування було введено вірний пароль, то лічильник скидається, і знову є 3 спроби для введення пароля
// Метод storage.setSecret(newSecret, newPassword) дозволяє встановити новий пароль та таємну фразу і скинути лічильник

/* const storage = makeSecret("Santa exists!", "qwerty");
// storage() === "Absolutely not a secret thing";

// storage.getSecret("qwerty") === "Santa exists!";

// storage.getSecret() === "Wrong password!";
// storage.getSecret("12345") === "Wrong password!";
// storage.getSecret("qwerty") === "Santa exists!";

// storage.getSecret(1) === "Wrong password!";
// storage.getSecret(2) === "Wrong password!";
// storage.getSecret(3) === "Wrong password!";
// storage.getSecret(4) === null;
// storage.getSecret("qwerty") === null;

// storage.setSecret("Mate academy is awesome!", "qwe123");

// storage.getSecret("qwerty") === "Wrong password!";
// storage.getSecret() === "Wrong password!";
// storage.getSecret("qwe123") === "Mate academy is awesome!";
*/
function makeSecret(secret, password) {
  let userSecret = secret;
  let userPass = password;
  let passTry = 0;
  let flag = true;

  function storage() {

    return 'Absolutely not a secret thing';
  }

  storage.getSecret = function (pass) {
    if (pass === userPass && flag) {
      passTry = 0;

      return userSecret;
    }

    if (pass !== userPass) {
      passTry++;

      if (passTry === 3) {
        flag = false;
      }

      return 'Wrong password!'
    }

    if (!flag) {
      return null;
    }
  }

  storage.setSecret = function (newSecret, newPassword) {
    userSecret = newSecret;
    userPass = newPassword;
    passTry = 0;
    flag = true;
  };

  return storage;
}

const storage = makeSecret("Santa exists!", "qwerty");
// console.log(storage()) // "Absolutely not a secret thing";

// console.log(storage.getSecret("qwerty")) // "Santa exists!";

// console.log(storage.getSecret()) // "Wrong password!";
// console.log(storage.getSecret("12345")) //"Wrong password!";
// console.log(storage.getSecret("qwerty")) // "Santa exists!";

console.log(storage.getSecret(1)) === "Wrong password!";
console.log(storage.getSecret(2)) === "Wrong password!";
console.log(storage.getSecret(3)) === "Wrong password!";
console.log(storage.getSecret(4)) === null;
console.log(storage.getSecret("qwerty")) === null;