'use strict';

function makeFibonacciFunction() {
    let fibA = 0;
    let fibB = 1;

    return function makeFibonacciFunction() {

        function helper() {
            let fibRes = fibB;
            fibB = fibA + fibB;
            fibA = fibRes;
            return fibRes;
        }

        return helper();

    };

};

const fibonacci = makeFibonacciFunction();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());


console.log('----------Со звездочкой-----------');

function fibonacciWithAsterisk(n) {
    let fibA = 0, fibB = 1, fibRes = 1;
    for (let i = 1; i <= n; i++ ) {
        fibRes = fibA + fibB;
        fibA = fibB;
        fibB = fibRes;
    }

    return fibRes;

}

console.log(fibonacciWithAsterisk(0)) // Вывод в консоль: 1
console.log(fibonacciWithAsterisk(1)) // Вывод в консоль: 1
console.log(fibonacciWithAsterisk(2)) // Вывод в консоль: 2
console.log(fibonacciWithAsterisk(3)) // Вывод в консоль: 3
console.log(fibonacciWithAsterisk(4)) // Вывод в консоль: 5
console.log(fibonacciWithAsterisk(5)) // Вывод в консоль: 8
console.log(fibonacciWithAsterisk(6)) // Вывод в консоль: 13
console.log(fibonacciWithAsterisk(7)) // Вывод в консоль: 21
