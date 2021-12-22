// Реализовать объект пользователя с полями name, lastname ,middleName, birthDate. Реализовать геттер/сеттер fullname, который возвращает одной строкой полное имя пользователя и записывает имя, фамилию и отчество при присвоении значения. Реализовать геттер age, который возвращает возраст используя данные даты рождения.

const obj1 ={
    name: "Jon", 
    lastname: "Snow",
    middleName: "Aegon", 
    birthDate: "01.01.1996",
    get fullname() { return `${this.name} ${this.middleName} ${this.lastname}`;},
    set fullname(value) {
        let arrName = value.split(" ").filter(n => n !==" ");
        this.name = arrName[0];
        this.middleName = arrName[1];
        this.lastname = arrName[2];
    },
    get age() {
        return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
    }  
}

// console.log(obj1.fullname);

obj1.fullname = "Аркадий Аркадьевич Аркадьев"

// console.log(obj1.fullname);
// console.log(obj1);
// console.log(obj1.age);


// С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном промежутке (min и max). Важное условие: при генерировании чисел они не должны повторяться.

function generNum (min,max) {
    let cash =[];
    return function func() {
        let num;
        if (max<min) {
            console.log("Не правильный диапазон");
            return "Не правильный диапазон";
        };
        if (cash.length === max-min) {
        console.log("закончились неповторяющиеся числа")
        return "закончились неповторяющиеся числа";
        }
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!cash.includes(num)) {
        cash.push(num);
        console.log("Кэш: ", cash);
        console.log("Случайное число: ", num);
        return num;
        } else {            
            return func();
        }

    }
}

const newGener = generNum(5,10);

newGener();
newGener();
newGener();
newGener();
newGener();
newGener();




// 3. Что выведет функция? 
// Function f() {
//   alert( this ); // ?
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

// ---> window/global


// 4. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

// --> нет


// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// В текущей реализации Сообщение не соответствует тому, что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”)

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // исправлено


// 6 .Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value
let elem = {value: 'Привет'};

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()
const boundFunc = func.bind(elem);



boundFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
boundFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 7. Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа. Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую вы передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c). 

const sum = (a, b, c) => a + b + c;

const curry = (func) => {
    return function (a) {
        return function(b) {
            return function(c) {
                return func(a,b,c);
            }
        }
    }
}

const currySum = curry(sum);


console.log('Каррированая сумма:', currySum(2)(3)(4));


// 	8. Напишите функцию создания задачи(createTask), принимающая название задачи, которая возвращает функцию смены статуса задачи.
// При вызове функции смены статуса возвращается строка с названием задачи и текущим статусом. Список статусов: “Не назначена”, “В работе”, “Тестирование”, “Завершена’. Статус Завершена - присваивается только после передачи флага true и только после тестирования.  Статус Не назначена - только при первом вызове.
 
// const task = createTask(‘Название задачи’);
// task() // => ‘Название задачи - не назначена’
// task() // => ‘Название задачи - В работе’
// task() // => ‘Название задачи - Тестирование’
// task() // => ‘Название задачи - В работе’
// task() // => ‘Название задачи - Тестирование’
// task() // => ‘Название задачи - В работе’
// task() // => ‘Название задачи - Тестирование’
// task(true) // => ‘Название задачи - Завершена’
// task() // => ‘Название задачи - Завершена’

const createTask =(taskname) => {
    let callNum = 0;
    let done = 0;
    return function (change) {
        if (done === 1) return `${taskname} - Завершена`;
        if (change === 'true') { //--------> специально записал true  строкой, чтобы нельзя было передать любые другие значения, а только это
            done = 1;
            return `${taskname} - Завершена`;
        };

        switch (callNum) {
            case 0: 
            callNum++;
            return `${taskname} - не назначена`;
            break;
            case 1: 
            callNum++;
            return `${taskname} - В работе`;
            break;
            case 2:
            callNum++;
            return `${taskname} - Тестирование`;
            break;
            case 3:
            callNum=2;
            return `${taskname} - В работе`;
            break;
        } 
    }
}

const task = createTask ('Задача: Разработка мобильного приложения');

console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task('true')); //можно ввести доп условие, чтобы завершение было только после тестирования
console.log(task());
console.log(task());
