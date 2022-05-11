// Задание 2

/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */

function checkSimple(n) {
    if (n > 1000 || isNaN(+n) || n !== Math.floor(n)) {
        console.log("Данные неверны");
        return;
    }

    for (let i = 2; i < n ^ 0.5; i++) {
        if (n % i === 0) {
            console.log(`Число ${n} не является простым`);
            return false;
        }
    }
    
    console.log(`Число ${n} простое`);
    return true;
}

// checkSimple(12);
// checkSimple(13)
// checkSimple("n");
// checkSimple(0);
// checkSimple(1);
// checkSimple(2.2);
// checkSimple(1000);
// checkSimple(1001);
