function makeStorage() {
  const memoryObj = {};

  function storage() {
    storage.setValue = function(key, value) {
      memoryObj[key] = value;

      return storage;
    }

    storage.getValue = function(item) {
      if (item in memoryObj) {
        return memoryObj[item];
      } else {
        return undefined;
      }
    }
  }

  return storage;
}

const storage = makeStorage();

storage.setValue('name', 'Peter');
// storage.setValue('age', 30);

// console.log(storage.getValue('name')); // Peter
// console.log(storage.getValue('age')); // 30

// storage.setValue('age', 31);
// storage.getValue('age'); // 31

// console.log(storage.getValue('occupation')); // undefined
