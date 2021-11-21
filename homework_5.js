// 1. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

let str = 'Каждый охотник желает знать';
function delete_characters(str, length) {

return str.slice(0,length); // начальная позиция в задании не определена поэтому 0.

};

console.log(delete_characters(str, 7));

// 2. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

let str1 = "HTML JavaScript PHP";

function insert_dash(str) {

return str.toUpperCase().split(' ').join("-");

}

console.log(insert_dash(str1));



// 3. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

let str2 = "string not starting with capital";  
 
function cursive_letter(str) {

return str[0].toUpperCase()+str.slice(1, str.length);

}

console.log(cursive_letter(str2));



// 4. Первая буква каждого слова заглавная

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

let str4 = "каждый охотник желает знать";  
 
function capitalize(str) {

return str.split(' ').map((word)=> word[0].toUpperCase()+word.slice(1, word.length)).join(" ");

}

console.log(capitalize(str4));


// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

let str5 = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
function change_register(str) {

return str.split(' ').map((word)=> word.split('').map((symbol) => (symbol===symbol.toUpperCase()) ? symbol.toLowerCase() : symbol.toUpperCase()).join("")).join(" ")

}

console.log(change_register(str5));

// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.


let str6 = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
function remove_char(str) {
    
    return str.match(/\s*\w\s*/gu).join(''); //решение с пробелами
    // return str.replace(/\W/g, ""); // решение без пробелов 
};

console.log(remove_char(str6));


// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.


function zeros (num, len, sign) {
    return `${sign}${'0'.repeat(len - (""+ num).length)}${num}`
};

console.log(zeros (12, 10, "-"));


// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.


function comparison(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
};

console.log(comparison('caT', 'Cat'));

// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

function insensitive_search(str1, str2) {
    return str1.toLowerCase().includes(str2.toLowerCase());
};

console.log(insensitive_search('I know it.', 'IT'));


// 10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

let str10 = "hEllo world";
function initCap(str) {
    return str.split(' ').map((word) => word[0].toUpperCase()+word.slice(1, word.length).toLowerCase()).join("");
};

console.log(initCap(str10));


// 11. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

let str11 = "HelloWorld";

function initSnake(str) {
    return str.split('').map((symbol, index) => symbol === symbol.toUpperCase() && index!==0 ?  ('_' + symbol.toLowerCase()) : symbol.toLowerCase()).join("");
};

console.log(initSnake(str11));

// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

function repeatStr(str, n) { 
    return str.repeat(n);
};

console.log(repeatStr('str', 5));


// 13. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

let pathname = "/home/user/dir/file.txt";

function path(pathname) { 
    return pathname.slice(pathname.lastIndexOf('/')+1, pathname.lastIndexOf('.'));
};

console.log(path(pathname));

// 14. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// let str = "Каждый охотник желает знать"; 
// let str1 = "скрипт";
// let str2 = "знать";

// String.prototype.endsWith = function(substring) {
//     ...ваш код...
// };
// 15. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// let str = 'Астрономия — Наука о небесных телах';

// function getSubstr(str, char, pos) {
//     ...ваш код...
// };

// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos) {
//     ...ваш код...
// };

// 17. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//     ...ваш код...
// };

// 18. Поделить строку на фрагменты
// function cutString(str, n) {
//     ...ваш код...
// };

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// let symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     ...ваш код...
// };

// 20. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// let str = "    Max is a good      boy     "; 

// function strip(str) {
//     ...ваш код...
// };




// 21. Удалить лишние слова из строки

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// let str = "Сила тяжести приложена к центру масс тела"; 

// function cutString(str, n) {
//     ...ваш код...
// };


// 22. Сортировка символов строки по алфавиту
// Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

// function alphabetize(str) {
//     ...ваш код...
// };


// 23. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// let str = 'abc def ghi jkl mno pqr stu';

// function findWord(word, str) {
//     ...ваш код...
// };

// 24. Преобразовать строку в массив слов

// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// let str = 'Каждый охотник желает знать';
// function stringToarray(str) {

// // Ваш код

// };

// let arr = stringToarray(str);

// 25. Реализовать объект

// Создать объект с начальным полем title. Добавить поле с ключом description начальным значением строкой. Добавить метод addField, который при вызове добавляет новое поле в объект с переданным именем и значением addField(fieldName, value), добавить метод editField(fieldName, value), который меняет указанное свойство объекта. Добавить метод удаление свойства deleteField(fieldName), удаляющий указанное поле. Добавить и изменить поля с помощью этих методов.

// 26.
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// 27.
// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// 28.
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
