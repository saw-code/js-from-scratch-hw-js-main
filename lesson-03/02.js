// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
  if (num % 2 === 1 || num === 1 || num % 2 === -1 || num === -1) {
    return false
  } else {
    return true
  }
}

console.log(isEven(-101))