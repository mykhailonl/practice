/*
Щороку Mate Robot Factory проводить бої роботів на арені. Різні модифікації роботів, змагаються за першість, а чемпіони попадають на дошку слави.
Тут і військові роботи, і роботи-прибиральники, і вантажні роботи, як бачиш, яких роботів тут тільки немає.
Давай, щоб усе було чесно, створимо дошку слави для цих змагань (клас BoardOfFame).
За замовчуванням, місць на дошці слави буде всього 3. Але в випадку міжнародних турнірів, де чемпіонських місць знадобиться більше,
конструктор класу BoardOfFame зможе прийняти будь-яке інше число місць.
Створи метод addRecord для усіх екземплярів класу BoardOfFame, який прийматиме об'єкт robot, та додаватиме новий запис на дошку слави.
Якщо новий робот матиме більше балів, ніж інші роботи, він займе своє місце в топі, посунувши інших роботів до низу.
Також створи getter list для екземплярів, який буде виводити список чемпіонів у форматі з прикладу.
Список має бути рядком. Getter повинен повертати ... для не існуючих елементів (якщо потрібно повернути перші 5, але в масиві всього 3 робота).
За правилами турнірів усі роботи мають мати унікальні імена. Якщо новий робот має таке ж ім'я,
як один з роботів в списку - просто онови у існуючого робота значення score.

Приклад:

const board = new BoardOfFame();
board.list // `1. ... | 2. ... | 3. ...`
board.addRecord({name: 'Cleaner-900', score: 6})
board.addRecord({name: 'Cleaner-775', score: 16})
board.list // `1. Cleaner-775: 16 | 2. Cleaner-900: 6 | 3. ...`
board.addRecord({name: 'MX-56', score: 23})
board.addRecord({name: 'Cleaner-775', score: 30})
board.list // `1. Cleaner-775: 30 | 2. MX-56: 23 | 3. Cleaner-900: 6`

const internationalBoard = new BoardOfFame(5);
internationalBoard.list = `1. ... | 2. ... | 3. ... | 4. ... | 5. ...`

Hints:

в конструктор додай змінну this.numberOfPlaces і зберігай там кількість місць на дошці слави
також в конструкторі створи массив this.robots і додавай туди всі об'єкти robot через метод addRecord
сортуй масив this.robots в методі addRecord
за перетворення масива об'єктів this.robots в строку в правильному форматі відповідає getter list
*/

class BoardOfFame {
  constructor(numberOfPlaces = 3) {
    this.numberOfPlaces = numberOfPlaces;
    this.robots = [];
  }

  addRecord(robot) {
    let isInArray = false;

    for (const robotInArray of this.robots) {
      if (robot.name === robotInArray.name) {
        isInArray = true;
      }
    }

    if (isInArray) {
      const targetRobot = this.robots.filter(
        (arrayRecord) => arrayRecord.name === robot.name
      );

      if (targetRobot[0].score < robot.score) {
        targetRobot[0].score = robot.score;
      }
    }

    if (!isInArray) {
      this.robots.push(robot);
    }
  }

  get list() {
    const sortedBoard = this.robots
      .sort((robot1, robot2) => robot2.score - robot1.score)
      .slice(0, this.numberOfPlaces);

    this.boardResult = ""; // start array

    for (let i = 0; i < this.numberOfPlaces; i++) {
      if (sortedBoard.length === 0) {
        // basic case if theres no revords yet and we need
        // to print empty string with places
        if (!this.boardResult) {
          this.boardResult = `${i + 1}. ... | `;
        } else {
          if (i + 1 !== this.numberOfPlaces) {
            this.boardResult += `${i + 1}. ... | `;
          } else {
            this.boardResult += `${i + 1}. ...`;
          }
        }
      } else {
        // case where we need to return a string based on records
        if (sortedBoard[i]) {
          if (i + 1 !== this.numberOfPlaces) {
            const result = `${i + 1}. ${sortedBoard[i].name}: ${
              sortedBoard[i].score
            } | `;

            this.boardResult += result;
          } else {
            const result = `${i + 1}. ${sortedBoard[i].name}: ${
              sortedBoard[i].score
            }`;

            this.boardResult += result;
          }
        } else {
          if (i + 1 !== this.numberOfPlaces) {
            this.boardResult += `${i + 1}. ... | `;
          } else {
            this.boardResult += `${i + 1}. ...`;
          }
        }
      }
    }

    return this.boardResult;
  }
}


const board = new BoardOfFame();
// console.log(board.list);
board.addRecord({ name: "Cleaner-900", score: 6 });
// board.addRecord({ name: "Cleaner-775", score: 16 });
// board.addRecord({ name: "Cleaner-775", score: 30 });
// board.addRecord({ name: "Cleaner-900", score: 60 });
// board.addRecord({ name: "Cleaner-910", score: 60 });


console.log(board.list);
