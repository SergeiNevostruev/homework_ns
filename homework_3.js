console.log("------Работа с if-else-----");
//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let a;
a=1;
// a=0;
// a=-3;

if (a === 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.


if (a > 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.


if (a < 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a >= 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a <= 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a !== 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

a='test';
// a='тест';
// a=3;

if (a === 'test') {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

a='1';
// a=1;
// a=3;

if (a === '1' || a === 1) {
    console.log("Верно");
} else {
    console.log("Неверно");
}



// _______________________________________________________________________________________________________________________________________________________


console.log("------Работа с логическими переменными-----");
// Работа с логическими переменными
//  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test;
test = true;
// test =false;

console.log("Длинная запись");

if (test) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

console.log("Короткая запись")
console.log(test ? "Верно" : "Неверно")

//  Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

console.log("Длинная запись");

if (!test) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

console.log("Короткая запись")
console.log(!test ? "Верно" : "Неверно")

// ____________________________________________________________________________________________________________________________________________________________________

console.log("------Работа с && (и) и || (или)-----");
// Работа с && (и) и || (или)
//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

a=5;
// a=0;
// a=-3;
// a=2;

if (a > 0 && a < 5) {
    console.log("Верно");
} else {
    console.log("Неверно");
}


//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

a=5;
// a=0;
// a=-3;
// a=2;

if (a === 0 || a === 2) {
    console.log(a+7);
} else {
    console.log(a/10);
}

//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let b;
a=1; b=3;
// a=0; b=6;
// a=3; b=5;


if (a <= 1 && b >= 3) {
    console.log(a+b);
} else {
    console.log(a-b);
}

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log("Верно");
} else {
    console.log("Неверно");
}


console.log("------На switch-case-----");
// На switch-case
//  Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

let num;
// num=1;
// num=2;
num=3;
// num=4;

switch (num) {
    case 1:
        console.log("Зима")
        break;
    case 2:
        console.log("Весна")
        break;
    case 3:
        console.log("Осень")
        break;
    case 4:
        console.log("Лето")
        break;
}

console.log("------Общие задачи-----");
// Общие задачи
//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day =16;

if (day >= 1 && day < 10) {
    console.log("Первая декада");
} else if (day >= 11 && day < 20) {
    console.log("Вторая декада");
} else if (day >= 21 && day < 31) {
    console.log("Третья декада");
} else {
    console.log("Некорректный ввод");
}

//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month =11;

if (month >= 1 && month < 3 || month === 12) {
    console.log("Зима");
} else if (month >= 3 && month < 6) {
    console.log("Весна");
} else if (month >= 6 && month < 9) {
    console.log("Лето");
} else if (month >= 9 && month < 12) {
    console.log("Осень");
} else {
    console.log("Некорректный ввод");
}

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
// console.log("Начало вывода чисел от 1 до 100");

// for (let i = 1; i <= 100; i++) {
//     if (i%3 === 0 && i%5 === 0) {
//         console.log("FizzBuzz");
//     }else if (i%3 === 0) {
//         console.log("Fizz");
//     } else if (i%5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// console.log("Конец вывода чисел от 1 до 100");


//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

console.log("Проверка первого символа строки на наличие 'a'");

let str='abcde';

if (str[0] === 'a') {
    console.log("да");
} else  {
    console.log("нет");
}


//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

console.log("Проверка первого символа строки на наличие цифр 1, 2 или 3");

let str2='12345';


if (str2[0] === '1' || str2[0] === '2' || str2[0] === '3') {
    console.log("да");
} else  {
    console.log("нет");
}


//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

console.log("Сложение цифр в строке");

let str3="123";
let sum=0;

for (let j=0; j < str3.length; j++) {
    sum=sum + (+str3[j]);
}

console.log(sum);

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

console.log("Стравнение суммы половин строки из 6 цифр");

let str4="123321";
console.log(
    (+str4[0] + +str4[1] + +str4[2]) === (+str4[3] + +str4[4] + +str4[5]) ? "Да" : "Нет"
    );

    // Циклы while и for
console.log("Циклы while и for");
    
    // Решите эти задачи сначала через цикл while, а затем через цикл for.
    //  Выведите столбец чисел от 1 до 100.

    // for (let i=1; i <= 100; i++) {
    //     console.log(i);
    // }


    //  Выведите столбец чисел от 11 до 33.

    // for (let i=11; i <= 33; i++) {
    //     console.log(i);
    // }

    //  Выведите столбец четных чисел в промежутке от 0 до 100.

    // for (let i=1; i <= 100; i++) {
    //     if (i%2 === 0) console.log(i);
    // }

    //  С помощью цикла найдите сумму чисел от 1 до 100.

    console.log('сумма чисел');

    let sumnumber = 0; 

    for (let i=1; i <= 100; i++) {
        sum = sum+i;
    }
    console.log(sum);


    //  Найти факториал введенного числа(использовать prompt).
    console.log('факториал');

    let fuct = 1; 
    let numfu = 5;
    // numfu = prompt('введи число');

    for (let i=1; i <= numfu; i++) {
        fuct = fuct*i;
    }

    console.log(fuct);


    // Дано число 5. Вывести в консоль число 555555555, не используя вычислений.
    console.log('вывести 555555555');

    let num5=5;
    let str5 ="";

    for (let i=1; i <= 9; i++) {
        str5 = str5 + num5;
    }

    console.log(str5);


    // Перебрать числа от 0 до 300. Если  число четное, делится на 12 без остатка и не равно 48, а результат деления на 12 нечетный, то вывести строку “Ooops”. Если число нечетное и делится на 3, то вывести “Hola”. Если значение ноль, то вывести “Zero” (без использования сравнения).

    console.log('перебор чисел от 0 до 300');
    
    // for (let i=0; i<=300; i++) {
    //     if (i%2 === 0 && i%12 === 0 && i/12 !== 48 & (i/12)%2 !== 0) {
    //         console.log(i); //проверка что за число
    //         console.log("Ooops");
    //     } else if (i%2 !== 0 && i%3 ===0) {
    //         console.log(i); //проверка что за число
    //         console.log("Hola");
    //     } else if (!i) {
    //         console.log(i); //проверка что за число
    //         console.log("Zero");
    //     } else {
    //         continue;
    //     }
    // }

     
    // Работа с for для массивов
    console.log("Работа с for для массивов");
        
    //  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
    console.log("вывод элементов массива");

    let arr=[1, 2, 3, 4, 5];

    for (let i=0; i< arr.length; i++) {
        console.log(arr[i]);
    }

    //  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

        console.log("вывод суммы массива");

    let result=0;
    
        for (let i=0; i< arr.length; i++) {
        result = result+arr[i];
    }
     console.log(result);
     
    // Задачи общие.

    console.log('задачи общие');

    //  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

    console.log("вывод элементов массива по условию");

    let arr2=[2, 5, 9, 15, 0, 4];

    for (let i=0; i< arr2.length; i++) {
        if (arr2[i]>3 && arr2[i]<10){
        console.log(arr2[i]);
        }
    }

    //  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

    console.log("вывод суммы положительных элементов массива");

    let arr3=[2, 5, 9, 15, 0, 4];
    let result1=0;
    
    for (let i=0; i< arr3.length; i++) {
       if (arr3[i]>0) {
       result1 = result1+arr3[i];
       }
    }
     console.log(result1);
     

    //  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
       console.log('Проверка наличия 4 в массиве');

    
    let arr4=[1, 2, 5, 9, 4, 13, 4, 10];
    
    for (let i=0; i< arr4.length; i++) {
       if (arr4[i]===4) {
       console.log('есть');
       break;
       }
    }


    //  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

    console.log('Вывод элементов массива по значению первого символа элемента');
    let arr5=[10, 20, 30, 50, 235, 3000];

    for (let i=0; i< arr5.length; i++) {
        if (+`${arr5[i]}`[0] === 1 || +`${arr5[i]}`[0] === 2 || +`${arr5[i]}`[0] === 5) {
            console.log(arr5[i]);
        }
    }

    //  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
    console.log('Преобразование массима в строку циклом');
    let arr6=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    let str6="";

    for (let i=0; i< arr6.length; i++) {
        if (i===(arr6.length-1)) {
         str6 = str6 + "-" + arr6[i] + "-";
        } else {
            str6 = str6 + "-" + arr6[i];
        }
    }

    console.log(str6);


    //  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

    //только в БРАУЗЕРЕ.
    // let week = ['понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    // for (let i=0; i < 7; i++) {
    //     if (i === 5 || i === 6) {
    //         document.write(`<p>${week[i].bold()}</p>`);
    //     } else {
    //         document.write(`<p>${week[i]}</p>`);
    //     }
    // }



    //  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

    //только в БРАУЗЕРЕ.
    // let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    // let day = "Вторник";

    // for (let i=0; i < 7; i++) {
    //     if (week[i]===day) {
    //         document.write(`<p>${week[i].italics()}</p>`);
    //     } else {
    //         document.write(`<p>${week[i]}</p>`);
    //     }
    // }


    //  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
            console.log('Определение количества итераций деления числа 1000 на 2 до 50');

    
    let n5 = 1000;

    for (let i=1;;i++) {
        if (n5>50) {
            n5=n5/2;
        } else {
            console.log(`Число на котором остановлена итерация ${n5}б предыдущее число ${n5*2}`);
            console.log(`Выполнено итераций - ${i}`);  
            break          
        }
    }


    // Найти все натуральные числа в промежутке между двумя введенными числами. Результат записать в строку или массив и вывести в консоль.
    console.log('Вывод натуральных чисел в промежутке от n7 до n8, не включая эти числа');

    let n7 = 2;
    let n8 =7;
    let arr7 =[];

    for (let i=n7+1; i<n8; i++) {
        arr7[i-n7-1]=i;
    }

    console.log(arr7);



    //  Найти последовательность чисел, вычисляемую по следующему алгоритму:
    // Вводится число;
    // Если четное, то делится на 2, если нечетное, то умножается на 3 и увеличивается на 1;
    // Полученное число в результате пункта b, становится следующим числом в последовательности и повторяется пункт b.
    // Алгоритм работает до тех пор, пока число в последовательности не станет равно 1. Результат записать в строку или массив и вывести в консоль.

    let number5 = 50;
    let arr8=[];
    for (let i=0;;i++) {
        if (number5 === 1) {
            arr8[i] = number5;
            break;
        } else if (number5%2 === 0) {
            number5=number5/2;
            arr8[i]=number5;
        } else {
            number5=number5*3+1;
            arr8[i]=number5;
        }
    }

    console.log(arr8);
