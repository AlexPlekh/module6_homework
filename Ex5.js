// Задание 5

/* Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль. */

let squaring = (x, n) => {
    
    if (typeof(x) !== "number" || isNaN(x) || !isFinite(x) || x % 1 !== 0 || x < 0) {
        console.log(x + " не является натуральным числом");
        return;
    };

    if (typeof(x) !== "number" || isNaN(n) || !isFinite(n) || n % 1 !== 0 || n < 0) {
        console.log(n + " не является натуральным числом");
        return;
    };

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(squaring(2, 10));
console.log(squaring(10, 2));

console.log(squaring(0, 0));
console.log(squaring(0, 1));
console.log(squaring(1, 0));

console.log(squaring(-1, 1.1));
console.log(squaring("у", "a"));

console.log(squaring(false, 2));

console.log(squaring(null, undefined));
