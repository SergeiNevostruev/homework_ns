
// Что будет выведено в консоль? Ответить не запуская код
// function foo() {
//  	console.log(this);
// }
// foo()


//  ---> window/global




// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//  console.log(this.name);
// },
// };
// obj.getName();


//  ---> 'Дмитрий'


// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {

//    function bar() {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();


//  ---> undefined


// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName: () => {

//    function bar() {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();


//  ---> undefined




// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    const bar = () => {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();

//  ---> Дмитрий


// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    console.log(this.name);
//  },
// };
 
// const obj2 = {
//  getName: obj.getName,
// };
 
// obj2.getName();

//  ---> undefined




// Что будет выведено в консоль? Ответить не запуская код
// const getName = () => {
//  console.log(this.name);
// };
 
// const obj = {
//  name: 'Дмитрий',
//  getName,
// };
 
// const obj2 = {
//  getName,
// };
// obj.getName();
// obj2.getName();

//  ---> undefined
//  ---> undefined



// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      function innerGetName() {
//        console.log(this.name);
//      }
//      innerGetName();
//    },
//  },
// };
 
// obj.friend.getName();

//  ---> undefined


 
// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      return function() {
//        console.log(this.name);
//      }
//    },
//  },
// };
//  obj.friend.getName()();

//  ---> undefined


// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      return () =>  {
//        console.log(this.name);
//      }
//    },
//  },
// };
// obj.friend.getName()();

//  ---> Владимир


// Что будет выведено в консоль? Ответить не запуская код
// const object = {
//  		message: 'Hello, World!',
//  		logMessage() {
//    		console.log(this.message);
//  		}
// };
// setTimeout(object.logMessage, 1000);


//  ---> undefined



// Воспользуйтесь функцией logMessage таким образом, чтобы в консоли увидеть сообщение "Hello, World!"



// const object = {
//  message: 'Hello, World!'
// };

// function logMessage() {
//  console.log(this.message); // "Hello, World!"
// }


// object.func = logMessage;

// object.func();



// Что будет выведено в консоль? Ответить не запуская код

// var length = 4;
// function callback() {
//  console.log(this.length); // What is logged?
// }

// const object = {
//  length: 5,
//  method(callback) {
//    callback();
//  }
// };
// object.method(callback, 1, 2);


//  ---> undefined



// Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b) присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены.

// Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел, иначе возвращать сообщение об ошибке.

const calculator = {
    a: null,
    b: null,
    
    setValues(a, b) {
        if (isFinite(a) && isFinite(b)) {
        this.a = a;
        this.b = b;
        } else {
            console.log('Нужно вводить число');
        }
    },

    mult(){
        return this.a * this.b;
    },

    sum(){
        return this.a + this.b;
    },
}
    
calculator.setValues(3,5);

// console.log(calculator.a, calculator.b);
// console.log(calculator.sum());
// console.log(calculator.mult());



// Создать объект calculator2 с 3 методами. 1 метод - setVales(a, b) - создать используя метод из предыдущего задания(можно скопировать по ссылке метод из объекта calculator либо создать функцию setValues, как мы делали на лекции и присвоить обоим объектам). 2 метод - div() - возвращает результат деления a на b. 3 метод - diff() - возвращает разность чисел a и b.

const calculator2 = {
    a: null,
    b: null,
    
    setValues: calculator.setValues,

    div(){
        return this.a / this.b;
    },

    diff(){
        return this.a - this.b;
    },
}

calculator2.setValues(10,4);

// console.log(calculator2.a, calculator2.b);
// console.log(calculator2.diff());
// console.log(calculator2.div());


// Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и методами setName, setAge, setCity, setFavoriteColor, которые меняют значения соответствующих свойств. Создать объект второго юзера user2 из существующего объекта user1. Изменить значения всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor. Вывести в консоль оба объекта и убедиться, что значения свойств разные.

const user1 = {
    username: "Гендельф", 
    age: 93, 
    city: "Нижний Новгород", 
    favoriteColor: "черный", 
    setName(name){
        this.username = name;
    }, 
    setAge (age) {
        this.age = age;
    }, 
    setCity (city) {
        this.city = city;
    }, 
    setFavoriteColor(color) {
        this.favoriteColor = color;
    },
}

const user2 = {...user1};

user2.setName("Niconor");
user2.setAge(18);
user2.setCity("Shir");
user2.setFavoriteColor("white");

// console.log(user1);
// console.log(user2);

// Реализовать функцию, которая принимает в себя любое количество числовых аргументов и возвращает наименьшее число. (не использовать Math.min).

const funcMin = (...arg) => {
    return arg.reduce((min,next)=> min < next ? min : next, arg[0]);
}

// console.log(funcMin(3,2,5,9,3,7));

// console.log(funcMin(-1,3,2,5,-100,9,3,7));

// Исправьте код таким образом, чтобы вывод логов соответствовал комментариями
const func = (user) => {
  const otherUser = {...user}; // исправленная строка
  otherUser.name = 'Дмитрий';
  otherUser.surName = 'Сидоров';
  return otherUser;
}

const  firstUser = {
  name: 'Василий',
  surName: 'Иванов'
}

// console.log(func(firstUser)) // { name: 'Дмитрий', surName: 'Сидоров' }

// console.log(firstUser) // { name: 'Василий', surName: 'Иванов' }

// Создайте объекты двух персонажей с именами(name) с числовыми характеристиками уровня(level), силы(strength), ловкости(agility) и интелекта(intellect). 
// Для обоих персонажей создайте метод attack, который рассчитывает и возвращает урон атаки путем сложения силы и ловкости, и метод fireball, который возвращает урон файерболом путем умножения интеллекта на уровень персонажа. Далее создайте метод combo, который возвращает сумму значений, которые возвращают методы  attack и fireball. 
// После формирования объектов персонажей создайте функцию startFight, которая принимает в себя два объекта и сравнивает результаты вызовов их методов combo и возвращает строку “Победил ИМЯ_ПЕРСОНАЖА”.

class Fighter {
    // методы класса
    constructor(name = "Username", level = 1, strength = 1, agility = 1, intellect = 1) { 
        this.name = name,
        this.level = level,
        this.strength = strength,
        this.agility = agility,
        this.intellect = intellect
    }

    attack() { return  this.strength + this.agility}
    fireball() { return this.level*this.intellect }
    combo() { return this.attack() + this.fireball()}
  };

  const raiden = new Fighter ("Raiden", 99, 20, 50, 100);
//   console.log(raiden);
//   console.log(raiden.attack());
//   console.log(raiden.fireball());
//   console.log(raiden.combo());
  

  const goro = new Fighter ("Goro", 30, 1000, 20, 4);
//   console.log(goro);
//   console.log(goro.attack());
//   console.log(goro.fireball());
//   console.log(goro.combo());


  const startFight = (fighter1, fighter2 ) => {
    console.log('Mortal Kombat');
    setTimeout(() => console.log(`${fighter1.name} vs ${fighter2.name}`), 1000);
    setTimeout(() => console.log('Fight'), 2000);
    let winner = (fighter1.combo() > fighter2.combo() ? fighter1.name : fighter2.name);
    setTimeout(() => console.log(`${winner}'s attacking`), 3000);
    setTimeout(() => console.log(`${winner} wins!`), 4000);
  }

  startFight(raiden, goro);
