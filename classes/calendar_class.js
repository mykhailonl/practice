// Створи клас Calendar з методом book. Метод приймає два цілих числа start та end - початок і кінець події, і додає її в розклад,
// якщо вона не перетинається з вже збереженими. Якщо подію додано, поверни true, інакше false.

// Врахуй, що подія може початися відразу ж, як тільки закінчилася попередня.

// Приклад:

// const calendar = new Calendar();
// calendar.book(5, 10) // true
// calendar.book(7, 25) // false
// calendar.book(1, 30) // false
// calendar.book(10, 25) // true
/*
Solution:
Creating a new calendar, calling book method with start and end hours of event, then checking, if start of event is not earlier,
than end of any other event and end of the event is not later, than start of comparing event. If check is succed - put it in a schedule
and return true, otherwise false
*/

class Calendar {
  constructor() {
    this.schedule = [];
  }

  book(start, end) {
    for (const event of this.schedule) {
      if (start < event[1] && end > event[0]) {
        return false;
      }
    }

    this.schedule.push([start, end]);
    return true;
  }
}

const calendar = new Calendar();
calendar.book(5, 10);
calendar.book(5, 10);
calendar.book(10, 17);

console.log(calendar.schedule)