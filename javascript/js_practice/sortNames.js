// Напиши функцію getEmployeesList, яка приймає масив people та повертає відсортований
//  в алфавітному порядку список повних імен працівників.
const people = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Morgan', lastName: 'Freeman' },
      { id: 3, firstName: 'Ivy', lastName: 'Lebelle' },
      { id: 4, firstName: 'Sam', lastName: 'Rockwell' },
      { id: 5, firstName: 'James', lastName: 'Franko' },
      { id: 6, firstName: 'Martin', lastName: 'Freeman' },
    ];

// getEmployeesList(people) === [
//  const expectedResult = [
      // 'Ivy Lebelle',
      // 'James Franko',
      // 'John Doe',
      // 'Martin Freeman',
      // 'Morgan Freeman',
      // 'Sam Rockwell',
// ];
function getEmployeesList(people) {
  const resultedArr = people
  .map(person => person.firstName + ' ' + person.lastName)
  .sort((a, b) => a.localeCompare(b))
  
  return resultedArr;
}

console.log(getEmployeesList(people));
