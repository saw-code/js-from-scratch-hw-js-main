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
function includesElement(array, element) {
  let includeElement
  for (let i = 0; i < array.length; i++) {
    array[i] === element ? includeElement = element : false
  }
  return includeElement === element
}

function findCommonElements(array1, array2) {
  let result = [];
  let minLength = array1.length < array2.length
    ? array1.length
    : array2.length;

  for (let i = 0; i < minLength; i++) {
    let el1 = array1[i];
    let el2 = array2[i];

    // проверяем элемент из первого массива
    if (el1 !== undefined && includesElement(array2, el1)) {
      if (!includesElement(result, el1)) {
        result.push(el1);
      }
    }

    // проверяем элемент из второго массива
    if (el2 !== undefined && includesElement(array1, el2)) {
      if (!includesElement(result, el2)) {
        result.push(el2);
      }
    }
  }

  return result;
}

console.log(findCommonElements([1, 2, 3, 4, 5, 5], [ 4, 5, 6, 4, 8, 4, 1]))