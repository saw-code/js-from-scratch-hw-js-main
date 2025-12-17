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
// function includesElement(array, element) {
//   let includeElement
//   for (let i = 0; i < array.length; i++) {
//     array[i] === element ? includeElement = element : false
//   }
//   return includeElement === element
// }
//
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
  const common = [];

  // Проходим по всем элементам первого массива
  for (let i = 0; i < array1.length; i++) {
    const elem1 = array1[i];

    // Проверяем, был ли этот элемент уже добавлен
    let isDuplicate = false;
    for (let k = 0; k < common.length; k++) {
      if (common[k] === elem1) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate) continue;

    // Проверяем наличие элемента во втором массиве
    if (includesElement(array2, elem1)) {
      common.push(elem1);
    }
  }

  return common;
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