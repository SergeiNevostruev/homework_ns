// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const vegetableLength = (arr) => arr.map(word => word.length);

console.log( vegetableLength(vegetables) ); // 7,4,7,8



// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17];

const currentSums = (numbers) => {
    let ar = [];
    numbers.reduce((sum, val) => {
        sum = sum + val;
        ar.push(sum);
        return sum;
    } ,0);
    return ar;
}

console.log(currentSums(numbers));
// currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]


// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

let arr = [0, 1, 2, 3, 4, 5, 6, 7];

function sumSeven(numbers) {

    // return numbers.map((num, ind) => [numbers[ind], numbers[numbers.length - ind-1]]); // не очень понятное условие задачи, поэтому решение такое исключительно для заданного массива. 
    return numbers.map(num => [num, 7-num]); // альтернативное решение

}

console.log(sumSeven(arr));

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. 

let str = "Каждый охотник желает знать, где сидит фазан."; 

const foo = (str) => str.split(' ').map(w => w[0]);

console.log(foo(str));

// foo(array);  // [К,о,ж,з,г,с,ф]



// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 

let str1 = "JavaScript"; 

const foo1 = (str) => str.split('').map((item, i) => {
    if (i !==0 && i !== str.length-1){
     return str[i-1] + item + str[i+1];
    } else if (i===0) {
    return item + str[i+1];
    } else {
        return str[i-1] + item
    }
    });

console.log(foo1(str1));

// foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

let numerics = [5, 7, 2, 9, 3, 1, 8];

const foo2 = (arr) => arr.sort((a,b) => b-a);

console.log(foo2(numerics));

// foo(numerics); // [9,8,7,5,3,2,1]

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений.

let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];
function getArr(...arg) {

    return [].concat(...arg).sort((a,b) => b-a);

}

console.log(getArr(a,b,c));

// getArr(a, b, c); // [9,8,7,6,5,4,3, 2, 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

let arr2 = [[1, 2, 3], [4, 5], [6]];

const sumElMatrix = (matrix) => [].concat(...matrix).reduce((sum,val) => sum + val, 0);

console.log(sumElMatrix(arr2));


// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

const sumElMatrix2 = (matrix) => [].concat(...[].concat(...matrix)).reduce((sum,val) => sum + val, 0);

console.log(sumElMatrix2(arr3));
// console.log(Array.isArray(arr3));

//////// Решение для матрицы любого уровня вложенности и комбинации вложенных объектов/////////

const sumElMatrixrec = (matrix) => {
    if (!Array.isArray(matrix[0])) {
        return matrix.reduce((sum,val) => sum + val, 0);
    } else {
        return matrix.reduce((sum, it) => sum + sumElMatrixrec(it), 0);
    };
}

let arr4 = [[[[1, 2], [3, 4]], [[5, 6], [7, 8]]],[1]];

console.log(sumElMatrixrec(arr4));

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

let arr5 = [2,3,4,5,6,7];

const revers = (arr) => arr.map((item,index) => arr[arr.length-1-index]);

console.log(revers(arr5));

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const sum10 = (arr) => {
    let sum = 0;
    for (let i = 0; i< arr.length; i++) {
        sum = sum + arr[i];
        if (sum > 10) return `Сумма первых ${i+1} чисел массива больше 10`;
    }

    return "сумма чисел в архиве меньще 10"
}

console.log(sum10(arr5));

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

const arrayFill = (a,b) => new Array(b).fill(a);

console.log(arrayFill('x', 10));

// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

let user = {
    name: 'John',
    city: 'Podlesovo',
}

let user1 = {};

Object.assign(user1, user);

user1.name = 'Nickonor';

let user2 = {...user};

user2.name = 'Evdokiya';

console.log(user);
console.log(user1);
console.log(user2);


// Создайте функцию, которая принимает 1 аргумент - объект пользователя user со свойствами name, age, city. Функция должна возвращать новый объект пользователя с измененным полем name, при этом оригинальный объект user должен остаться неизменным.

const newObj = (obj) => {
    const newObject = {...obj};
    newObject.name = 'new Name';
    return newObject;
}

let user3 = {
    name: 'Luciy',
    city: 'Podlesovo',
}

let user4 = newObj(user3);

console.log(user3);
console.log(user4)
 
// Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of ...). 

const sumArg = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum +=arg;
    }
    return sum;
}

console.log(sumArg(2,3,6,8,4,9));

// Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом.

const palindrom = (str) => str === str.split('').reverse().join('');

console.log(palindrom('ороро'));
console.log(palindrom('оророр'));

// Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

let arr10 =[1,2,3,55,7,8,75];
let arr11 =[11,22,3,55,71,8,751];

const compareArrs = (arr1,arr2) => arr1.filter(item => arr2.includes(item));

const compareArrs1 = (arr1,arr2) => arr1.filter(item => arr2.find(it => it === item) !== undefined);

console.log(compareArrs(arr10,arr11));
console.log(compareArrs1(arr10,arr11));


/////////// Задания ниже были решены в предыдущих домащних работах и выложены на githab ///////////



// ______________________________________________________________
// Задачи из прошлых домашних заданий:

//  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи( Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.).
//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).
