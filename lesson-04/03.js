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
  let unionArray = getUnionArray(array1, array2)

  let result = [];

  for (let i = 0; i < unionArray.length; i++) {
    let element = unionArray[i];
    let count = 0;

    // Считаем, сколько раз элемент встречается в массиве
    for (let j = 0; j < unionArray.length; j++) {
      if (unionArray[j] === element) {
        count++;
      }
    }

    // Если элемент встречается больше одного раза
    // и ещё не добавлен в результат
    let alreadyAdded = false;
    for (let k = 0; k < result.length; k++) {
      if (result[k] === element) {
        alreadyAdded = true;
        break;
      }
    }

    if (count > 1 && !alreadyAdded) {
      result.push(element);
    }
  }

  return result;
}

console.log(findCommonElements([1, 2, 3], [1, 4, 5, 6, 3]))