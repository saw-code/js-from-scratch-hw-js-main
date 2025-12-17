/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив,
содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее.
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


// function findCommonElements(array1, array2) {
//   let result = [];
//
//   for (let i = 0; i < array1.length; i++) {
//     let element = array1[i];
//
//     if (includesElement(array2, element)) {
//       if (!includesElement(result, element)) {
//         result.push(element);
//       }
//     }
//   }
//
//   return result
// }

function findCommonElements(array1, array2) {
  const result = [];

  // Проходим по всем элементам первого массива
  for (let i = 0; i < array1.length; i++) {
    const currentElement = array1[i];

    // Проверяем, есть ли элемент во втором массиве
    if (includesElement(array2, currentElement)) {
      // Проверяем, нет ли уже такого элемента в результате
      let isDuplicate = false;
      for (let j = 0; j < result.length; j++) {
        if (result[j] === currentElement) {
          isDuplicate = true;
          break;
        }
      }

      // Если не дубликат, добавляем в результат
      if (!isDuplicate) {
        result.push(currentElement);
      }
    }
  }

  return result;
}

const testCases = [{
  array1: [1, 2, 3],
  array2: [2, 3, 4, 5, 6],
  expected: [2, 3]
}, {
  array1: ['apple', 'banana', 'cherry'],
  array2: ['banana'],
  expected: ['banana']
}];


console.log(findCommonElements([1, 2, 3, 7, 9, 1, 1], [1, 4, 5]))
console.log(findCommonElements([1, 2, 3, ], [4, 5, 6]))
console.log(findCommonElements(testCases[0].array1, testCases[0].array2))
console.log(findCommonElements(testCases[1].array1, testCases[1].array2))