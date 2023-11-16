const allPeople = [
  {
    sex: "m",
    born: 1535,
    died: 1582,
    name: "Pauwels van Haverbeke",
    father: "N. van Haverbeke",
    mother: null,
  },
  {
    sex: "f",
    born: 1542,
    died: 1582,
    name: "Lievijne Jans",
    father: null,
    mother: null,
  },
  {
    sex: "m",
    born: 1570,
    died: 1636,
    name: "Lieven van Haverbeke",
    father: "Pauwels van Haverbeke",
    mother: "Lievijne Jans",
  },
  {
    sex: "m",
    born: 1602,
    died: 1642,
    name: "Pieter Haverbeke",
    father: "Lieven van Haverbeke",
    mother: null,
  },
  {
    sex: "f",
    born: 1607,
    died: 1670,
    name: "Anna van Hecke",
    father: "Paschasius van Hecke",
    mother: "Martijntken Beelaert",
  },
  {
    sex: "m",
    born: 1631,
    died: 1676,
    name: "Lieven Haverbeke",
    father: "Pieter Haverbeke",
    mother: "Anna van Hecke",
  },
  {
    sex: "f",
    born: 1632,
    died: 1674,
    name: "Elisabeth Hercke",
    father: "Willem Hercke",
    mother: "Margriet de Brabander",
  },
  {
    sex: "m",
    born: 1652,
    died: 1723,
    name: "Daniel Haverbeke",
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    sex: "f",
    born: 1654,
    died: 1723,
    name: "Joanna de Pape",
    father: "Vincent de Pape",
    mother: "Petronella Wauters",
  },
  {
    sex: "f",
    born: 1666,
    died: 1727,
    name: "Martina de Pape",
    father: "Vincent de Pape",
    mother: "Petronella Wauters",
  },
  {
    sex: "m",
    born: 1668,
    died: 1731,
    name: "Willem Haverbeke",
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    sex: "m",
    born: 1671,
    died: 1731,
    name: "Jan Haverbeke",
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    sex: "f",
    born: 1683,
    died: 1724,
    name: "Maria de Rycke",
    father: "Frederik de Rycke",
    mother: "Laurentia van Vlaenderen",
  },
  {
    sex: "f",
    born: 1692,
    died: 1743,
    name: "Livina Haverbeke",
    father: "Daniel Haverbeke",
    mother: "Joanna de Pape",
  },
  {
    sex: "m",
    born: 1695,
    died: 1762,
    name: "Pieter Bernard Haverbeke",
    father: "Willem Haverbeke",
    mother: "Petronella Wauters",
  },
  {
    sex: "m",
    born: 1696,
    died: 1724,
    name: "Lieven de Causmaecker",
    father: "Carel de Causmaecker",
    mother: "Joanna Claes",
  },
  {
    sex: "f",
    born: 1699,
    died: 1740,
    name: "Jacoba Lammens",
    father: "Lieven Lammens",
    mother: "Livina de Vrieze",
  },
  {
    sex: "m",
    born: 1705,
    died: 1780,
    name: "Pieter de Decker",
    father: "Joos de Decker",
    mother: "Petronella van de Steene",
  },
  {
    sex: "f",
    born: 1710,
    died: 1786,
    name: "Laurentia Haverbeke",
    father: "Jan Haverbeke",
    mother: "Maria de Rycke",
  },
  {
    sex: "f",
    born: 1711,
    died: 1754,
    name: "Elisabeth Haverbeke",
    father: "Jan Haverbeke",
    mother: "Maria de Rycke",
  },
  {
    sex: "m",
    born: 1714,
    died: 1748,
    name: "Jan van Brussel",
    father: "Jacobus van Brussel",
    mother: "Joanna van Rooten",
  },
  {
    sex: "m",
    born: 1721,
    died: 1789,
    name: "Bernardus de Causmaecker",
    father: "Lieven de Causmaecker",
    mother: "Livina Haverbeke",
  },
  {
    sex: "m",
    born: 1725,
    died: 1779,
    name: "Jan Francies Haverbeke",
    father: "Pieter Bernard Haverbeke",
    mother: "Livina de Vrieze",
  },
  {
    sex: "f",
    born: 1728,
    died: 1734,
    name: "Angela Haverbeke",
    father: "Pieter Bernard Haverbeke",
    mother: "Livina de Vrieze",
  },
  {
    sex: "f",
    born: 1731,
    died: 1781,
    name: "Petronella de Decker",
    father: "Pieter de Decker",
    mother: "Livina Haverbeke",
  },
  {
    sex: "m",
    born: 1736,
    died: 1809,
    name: "Jacobus Bernardus van Brussel",
    father: "Jan van Brussel",
    mother: "Elisabeth Haverbeke",
  },
  {
    sex: "m",
    born: 1753,
    died: 1798,
    name: "Pieter Antone Haverbeke",
    father: "Jan Francies Haverbeke",
    mother: "Petronella de Decker",
  },
  {
    sex: "f",
    born: 1761,
    died: 1826,
    name: "Livina Sierens",
    father: "Jan Sierens",
    mother: "Maria van Waes",
  },
  {
    sex: "m",
    born: 1761,
    died: 1833,
    name: "Jan Frans van Brussel",
    father: "Jacobus Bernardus van Brussel",
    mother: null,
  },
  {
    sex: "f",
    born: 1762,
    died: 1807,
    name: "Joanna de Causmaecker",
    father: "Bernardus de Causmaecker",
    mother: null,
  },
  {
    sex: "m",
    born: 1796,
    died: 1837,
    name: "Carel Haverbeke",
    father: "Pieter Antone Haverbeke",
    mother: "Livina Sierens",
  },
  {
    sex: "f",
    born: 1801,
    died: 1834,
    name: "Maria van Brussel",
    father: "Jan Frans van Brussel",
    mother: "Joanna de Causmaecker",
  },
  {
    sex: "m",
    born: 1832,
    died: 1905,
    name: "Carolus Haverbeke",
    father: "Carel Haverbeke",
    mother: "Maria van Brussel",
  },
  {
    sex: "f",
    born: 1835,
    died: 1917,
    name: "Maria Sturm",
    father: "Charles Sturm",
    mother: "Seraphina Spelier",
  },
  {
    sex: "f",
    born: 1876,
    died: 1956,
    name: "Emma de Milliano",
    father: "Petrus de Milliano",
    mother: "Sophia van Damme",
  },
  {
    sex: "m",
    born: 1877,
    died: 1968,
    name: "Emile Haverbeke",
    father: "Carolus Haverbeke",
    mother: "Maria Sturm",
  },
  {
    sex: "m",
    born: 1905,
    died: 1997,
    name: "Maria Haverbeke",
    father: "Emile Haverbeke",
    mother: "Emma de Milliano",
  },
  {
    sex: "m",
    born: 1907,
    died: 1997,
    name: "Philibert Haverbeke",
    father: "Emile Haverbeke",
    mother: "Emma de Milliano",
  },
  {
    sex: "f",
    born: 1918,
    died: 2012,
    name: "Clara Aernoudts",
    father: "Henry Aernoudts",
    mother: "Sidonie Coene",
  },
];
const people = [
  {
    sex: "m",
    born: 1671,
    died: 1731,
    name: "Jan Haverbeke",
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    sex: "f",
    born: 1683,
    died: 1724,
    name: "Maria de Rycke",
    father: "Frederik de Rycke",
    mother: "Laurentia van Vlaenderen",
  },
  {
    sex: "f",
    born: 1692,
    died: 1743,
    name: "Livina Haverbeke",
    father: "Daniel Haverbeke",
    mother: "Joanna de Pape",
  },
  {
    sex: "m",
    born: 1695,
    died: 1762,
    name: "Pieter Bernard Haverbeke",
    father: "Willem Haverbeke",
    mother: "Petronella Wauters",
  },
  {
    sex: "m",
    born: 1696,
    died: 1724,
    name: "Lieven de Causmaecker",
    father: "Carel de Causmaecker",
    mother: "Joanna Claes",
  },
  {
    sex: "f",
    born: 1699,
    died: 1740,
    name: "Jacoba Lammens",
    father: "Lieven Lammens",
    mother: "Livina de Vrieze",
  },
  {
    sex: "m",
    born: 1705,
    died: 1780,
    name: "Pieter de Decker",
    father: "Joos de Decker",
    mother: "Petronella van de Steene",
  },
  {
    sex: "f",
    born: 1710,
    died: 1786,
    name: "Laurentia Haverbeke",
    father: "Jan Haverbeke",
    mother: "Maria de Rycke",
  },
  {
    sex: "f",
    born: 1711,
    died: 1754,
    name: "Elisabeth Haverbeke",
    father: "Jan Haverbeke",
    mother: "Maria de Rycke",
  },
  {
    sex: "m",
    born: 1714,
    died: 1748,
    name: "Jan van Brussel",
    father: "Jacobus van Brussel",
    mother: "Joanna van Rooten",
  },
  {
    sex: "m",
    born: 1725,
    died: 1779,
    name: "Jan Francies Haverbeke",
    father: "Pieter Bernard Haverbeke",
    mother: "Livina de Vrieze",
  },
  {
    sex: "f",
    born: 1728,
    died: 1734,
    name: "Angela Haverbeke",
    father: "Pieter Bernard Haverbeke",
    mother: "Livina de Vrieze",
  },
  {
    sex: "f",
    born: 1731,
    died: 1781,
    name: "Petronella de Decker",
    father: "Pieter de Decker",
    mother: "Livina Haverbeke",
  },
];
//Функція calculateWomenAverageAge приймає параметр people та необов'язковий параметр
//withChildren (булеве значення). Вона повинна повернути середню тривалість життя
//всіх жінок. Використовуй властивість mother дитини, щоб перевірити, чи є жінка
//її матір'ю. Враховуй лише жінок, які мають дітей у масиві people, якщо параметр withChildren дорівнює true.

function calculateWomenAverageAge(people, withChildren) {
  if (people.length === 0) {
    return 0;
  }

  if (withChildren !== true) {
    const onlyWomenArr = people.filter((human) => human.sex === "f");

    if (onlyWomenArr.length === 0) {
      return 0;
    }

    const onlyWomenAges = onlyWomenArr.map((woman) => woman.died - woman.born);
    const sumOfOnlyWomenAges = onlyWomenAges.reduce((acc, cur) => acc + cur, 0);

    return sumOfOnlyWomenAges / onlyWomenAges.length;
  }

  if (withChildren) {
    const womenWithChildren = people.filter((human) => {
      return (
        human.sex === "f" && people.some((child) => child.mother === human.name)
      );
    });

    if (womenWithChildren.length === 0) {
      return 0;
    }

    const womenWithChildrenAges = womenWithChildren.map(
      (woman) => woman.died - woman.born
    );
    const sumOfAgesWomenWithChildren = womenWithChildrenAges.reduce(
      (acc, cur) => acc + cur,
      0
    );
    const avAgeWomanWithChildren =
      sumOfAgesWomenWithChildren / womenWithChildrenAges.length;

    return avAgeWomanWithChildren;
  }
}

// function calculateMotherAverageAge(people, onlyWithSon) {
//   if (people.length === 0) {
//     return 0;
//   }

//   if (onlyWithSon === undefined) {
//     const momsAgesArr = [];

//     for (let i = 0; i < people.length; i++) {
//       let personNameMother = people[i].mother;

//       const motherInArrCheck = people.find(
//         person => person.name === personNameMother
//       );

//       if (motherInArrCheck) {
//         momsAgesArr.push(people[i].born - motherInArrCheck.born);
//       }
//     }

//     if (momsAgesArr.length === 0) {
//       return 0;
//     } 

//     // counting average age of mothers by adding all ages etc
//     const sumMomsAges = momsAgesArr.reduce(
//       (acc, cur) => acc + cur,
//       0)
//     const avAge = sumMomsAges / momsAgesArr.length;

//     return avAge;
//   }

//   if (onlyWithSon) {
//     const momsWithSonsAgesArr = [];

//     for (let i = 0; i < people.length; i++) {
//       let humanMomName = people[i].mother;
      
//       const humanMom = people.find(
//         person => person.name === humanMomName
//       );

//       if (humanMom && people[i].sex === 'm') {
//         momsWithSonsAgesArr.push(people[i].born - humanMom.born);
//       }
//     }
  
//     if (momsWithSonsAgesArr.length === 0) {
//       return 0;
//     }

//     const sumMomsAgesArr = momsWithSonsAgesArr.reduce(
//       (acc, cur) => acc + cur,
//      0)

//     const averMomWithSonAge = sumMomsAgesArr / momsWithSonsAgesArr.length;
//     return averMomWithSonAge;
//   }
// }


const result = calculateWomenAverageAge(allPeople, true);
console.log('result', result)