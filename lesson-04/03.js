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

  let newArray = [];
  let newArray2 = [];


  for (let i = 0; i < array1.length; i++) {
    if (!includesElement(newArray, array1[i])){
      newArray.push(array1[i])
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (includesElement(newArray, array2[i])){
      newArray2.push(array2[i])
    }
  }

  return newArray2

}

console.log(findCommonElements([1, 2, 3, 4, 5, 6, 7], [4, 5, 1, 3, 2]))