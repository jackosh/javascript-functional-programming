// Написать функцию, получающую на вход два числа.
// Если оба числа чётные - функция возвращает их произведение.
// Если оба числа нечётные - функция возвращает их сумму.
// Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

const isEven = (x) => x % 2 === 0 // Проверка чётности
const isOdd = (x) => !isEven(x) // Проверка нечётности

const func = (a, b) => isOdd(a) && isOdd(b) ? a + b : (isEven(a) && isEven(b) ?  a * b : [a, b].find(isOdd))

console.log(func(4, 4)) // 16
console.log(func(5, 5)) // 10
console.log(func(4, 5)) // 5
console.log(func(5, 4)) // 5
