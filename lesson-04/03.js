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

function getUnionArray (array1, array2) {
  let unionArray = []
  for (let i = 0; i < array1.length; i++) {
    unionArray.push(array1[i])
  }

  for (let i = 0; i < array2.length; i++) {
    unionArray.push(array2[i])
  }

  return unionArray
}

function findCommonElements(array1, array2) {

  let newArray = [];

  let unionArray = getUnionArray(array1, array2)

  for (let i = 0; i < unionArray.length; i++) {
    if (includesElement(array1, unionArray[i]) === includesElement(array2, unionArray[i]) && !includesElement(newArray, unionArray[i])){
      newArray.push(unionArray[i])
    }
  }

  return newArray
}

console.log(findCommonElements(['apple', 'banana', 'cherry'], [1]))