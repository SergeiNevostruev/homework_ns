// ЗАДАНИЯ
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function row2(a) {
    return a**2;
}
console.log(row2(6));

// Сделайте функцию, которая возвращает сумму двух чисел.

function sum2(a, b) {
    return a+b;
}
console.log(sum2(5, 6));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function div(a, b) {
    return a/b;
}
console.log(div(12, 6));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function weekDay(n) {
    let week = ['понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return week[n-1];
}
console.log(weekDay(2));


// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

let check = (a, b) => a===b;
console.log(check(3, 2));

//  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
// больше 10 - пусть вернет true, а если нет то - false.

let checkSum = (a, b) => (a+b)>10;
console.log(checkSum(3, 8));


//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

let negative = (a) => a<0;
console.log(negative(-3));


//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

let isNumberInRange = (a) => a>0 && a<10;
console.log(isNumberInRange(5));

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

function rgb(r=0, g=0, b=0) {
    return `rgb(${r},${g},${b})`;
}

console.log(rgb());

// Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.

function funk3 (a, b=row2(a), c=sum2(a, 1)) {
    if (a%2 ===0) {
        return b;
    } else {
        return c;
    }
}

console.log(funk3(10));
console.log(funk3(5));

// Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 

function mult(num1 = 1, num2 = 1 , num3 = 2) {
    let res=1;
    for (let i = 1; i<=num3; i++) {
        res=res*num1*num2
    }
    return res;
}

console.log(mult(5,2,3));


// Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.

function words(a, b, c) {
    return [a,b,c].sort().join(', ');
}

console.log(words('town', 'book', 'cat'));

//  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

let arr10 = [2,5,4,3,7,89,0,34,2,12];
let arrNew =[];

for (let i=0; i<arr10.length; i++) {
    if (isNumberInRange(arr10[i])) {
        arrNew.push(arr10[i]);
    }
}
console.log(arrNew);


//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num) {
    return (""+num).split('').reduce((sum, current) => +sum + +current, 0);
}

console.log(getDigitsSum(8975));

//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

let arr11 = [];

for (let i=1; i<=2020; i++) {
    if (getDigitsSum(i)===13) {
        arr11.push(i);
    }
}

console.log(arr11);

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

let isEven = (num) => (num%2 === 0);

console.log(isEven(12));

//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
let arr13 = [2,3,4,7,8,5,4,3,5,5,23,43,4,56]
let arr12 = [];

for (let i=0; i< arr13.length; i++) {
    if (isEven(arr13[i])) {
        arr12.push(arr13[i]);
    }
}

console.log(arr12);

//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).

function getDivisors (num) {
    let arr=[];
    for (let i=1; i<=num; i++) {
        if (num%i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getDivisors (50));


//  Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let arr14 = [2,3,4,7,8,5,4]

function rec (arr) {
    if (arr.length===1) {
        console.log(arr[0])
        return;
    } else {
        console.log(arr.shift());
        return rec(arr);
    }
}

rec (arr14)

//  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

let lessNine = 698;

for (let i=1;;i++) {
    if (getDigitsSum(lessNine) > 9) {
        lessNine = getDigitsSum(lessNine);
    } else {
        lessNine = getDigitsSum(lessNine)
        console.log(lessNine);
        break;
    }
}
