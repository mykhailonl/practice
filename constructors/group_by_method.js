Array.prototype.groupBy = function (callback = x => x) {
    const result = {};
    
    for (const item of this) {
      console.log("result of callback", callback(item)); // result of callback
      const key = callback(item);
      if (!result[key]) {
        result[key] = [item];
      } else {
        result[key].push(item);
      }
    }

    console.log(result);
    return result;
};

const words = ["one", "two", "three", "four", "five", "six", "seven"];
const grouppedWords = words.groupBy((word) => word.length);

// grouppedWords ===
//   {
//     3: ["one", "two", "six"],
//     4: ["four", "five"],
//     5: ["three", "seven"],
//   };