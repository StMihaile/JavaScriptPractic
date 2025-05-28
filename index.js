/*

1

let currentYear = 2025;

let studentName = prompt("Ваше имя");
let year = prompt("год рождения");
let height = prompt("рост");
let weight = prompt("вес");

let age = currentYear - year;
let IMT = weight / (height * height);
console.log(studentName, "Возраст:", age, "Рост:", height, "Вес:", weight, "Индекс массы тела:", IMT);*/



/*

2

let product1 = prompt("Название товара") // Название товара 1
let price1 = prompt("цена") // Стоимость товара  1
let count1 = prompt("колличество товара") // Количесто товара 1

let product2 = prompt("Название товара") // Название товара 2
let price2 = prompt("цена")  // Стоимость товара  2
let count2 = prompt("колличество товара") // Количесто товара 2

let product3 = prompt("Название товара") // Название товара 3
let price3 = prompt("цена") // Стоимость товара  3
let count3 = prompt("колличество товара") // Количесто товара 3

console.log(product1, price1 * count1) // Вывод в консоль

console.log(product2, price2 * count2) // Вывод в консоль

console.log(product3, price3 * count3) // Вывод в консоль

let sum = (price1 * count1)+(price2 * count2)+(price3 * count3);

console.log(sum);*/



/*

3

let password = prompt('Введите пароль');
let repeatPassword = prompt('повторите введённый пароль');
if (password == repeatPassword) {
    alert("Пароли совпадают");
} else {
    alert("Пароли не совпадают");
}
    */

/*

4

let isSunny = true;
let temperature = 22;
let hasUmbrella = false;

if (isSunny||hasUmbrella&&temperature>=20&&temperature<=30){
    console.log("Можно устроить пикник");
} else {
    "Не стоит идти на пикник"
}

*/

/*
5

const number = 23;

const s1 = String(number);
const s2 = "" + number;
const s3 = `${number}`

console.log(typeof s1, s1);
console.log(typeof s2, s2);
console.log(typeof s3, s3);

*/

/*

6

const string = '12';
const number = Number(string);
console.log(typeof number, number);

7

console.log(1 == "1");
console.log(1 == "1s");
console.log(1 === "1");
console.log(1 !== "1");

8

const score = 100;
const additionalScore = "200"
let finalScore;

if (additionalScore === 200) {
    finalScore = score + additionalScore;
}
else {
    finalScore = score;
}
console.log(finalScore);

*/
/*
9

const tumbler = false;
if(tumbler === true) {
    console.log("Свет включен");
}else {
    console.log("Свет выключен");
}

if(tumbler) {
    console.log("Свет включен");
}else {
    console.log("Свет выключен");


tumbler ? console.log("Свет включен"):console.log("Свет выключен");

*/
/*
10

const day = 6;
let dayName;
switch (day) {
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресение";
        break;
    default:
        dayName = "Некорректный день";
        break;

}
console.log(dayName);

*/

/*
11

const isRain = true;

isRain ? console.log("Идет дождь") : console.log("Дождя нет");

12

let minPrice = 1500
let maxPrise = 7000
let price = prompt('Введите цену кросовок');

if (price > maxPrise) {
    alert('Цена слишком большая');
} else if (price < minPrice) {
    alert("Цена слишком маленькая");
} else {
    alert("Цена нормальная")
}

13

let freeTill = Number(prompt('Введите номер кассы'));
switch (freeTill) {
    case 1:
        alert("Свободная касса №1");
        break;
    case 2:
        alert("Свободная касса №2");
        break;
    case 3:
        alert("Свободная касса №3");
        break;
    case 4:
        alert("Свободная касса №4");
        break;
        default:
        alert("Все кассы заняты");
}

*/

/*
14

const cardInserted = true; // Указывает, что карта вставлена
const balance = 500; // Доступная сумма

const amount = 1000; // Ввод суммы операции

if (cardInserted&&amount<=balance) {
  console.log("Операция выполняется");
} else {
  console.log("Операция отклонена")
}

*/

15
/*

let carPower = 110;
let taxRate;
if (carPower < 100) {
    taxRate = 12;
} else if (carPower >= 100 && carPower < 125) {
    taxRate = 25;
} else if (carPower >= 125 && carPower < 150) {
    taxRate = 35;
} else if (carPower >= 150 && carPower < 175) {
    taxRate = 45;
} else if (carPower >= 175 && carPower < 200) {
    taxRate = 50;
} else if (carPower >= 200 && carPower < 225) {
    taxRate = 65;
} else if (carPower >= 225 && carPower < 250) {
    taxRate = 75;
} else {
    taxRate = 150;
}
let tax = carPower * taxRate;

console.log("Сумма налога:", tax);

*/

/*

16


const age = 18;
function doSomething() {
    if (age < 18) {
        console.log("Несовершеннолетний");
    } else {
        console.log("Совершеннолетний");
    }
}

doSomething();

*/


/*
17

function calc() {
    let a = 10;
    let b = 20;
   console.log(a+b);
}

calc();

*/
/*
18


function checkAge(age) {
    if(age < 18){
        console.log("Несовершеннолетний");
    } else {
        console.log("Совершеннолетний");
    }
}

checkAge(21)
checkAge(16)

*/

/*
19

function sum (a,b,c) {
    console.log(a+b+c);
}

sum(10,20,30);

*/

/*
20

function sum(a = 0, b = 0, c = 0) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log("Неверные параметры");
    }
}

sum(10, 20, "Строка");

*/

/*

21

function pow(n) {
    return n * n;
}
const result = pow(3);

console.log(result);

*/
/*
22

function returnIf(a, b) {
    if (a > b) {
        return "A больше B"
    } else {
        return "A меньше B"
    }
}

console.log(returnIf(1, 2));

*/

/*
23

const newPow = (n) => n * n;
console.log(newPow(10));

*/

/*
24

const getAverage = (a, b, c) => (a + b + c) / 3;

25

const celsiusToFahrenheit = n => n * 1.8 + 32;
const fahrenheitToCelsius = n => (n - 32) / 1.8;

26

let count = 3;
function countPlusOne() {
    console.log(++count);
}
*/

/*
27

function totalSum(priceItem, amountItem, discountItem) {
    let discount = priceItem / 100 * discountItem;
    return (priceItem - discount) * amountItem;
}*/


// DOM

/*
1

const contentEL = document.querySelector('.content');
const h1El = document.createElement('h1');
contentEL.append(h1El);
const headerEl = document.createElement('header');
contentEL.prepend(headerEl);
console.log(contentEL);
console.log(h1El);
*/

/*

2

const contentEl = document.querySelector('.content');
const h2El = document.createElement('h2');
contentEl.prepend(h2El);
const pEl = document.createElement('p');
contentEl.append(pEl);

*/

/*
3

const contentEL = document.querySelector('.content');
const h1El = document.createElement('h1');
const headerEl = document.createElement('header');
headerEl.innerHTML = '<span>text header</span>'

//const textTitle = document.createTextNode('new heading node');
//h1El.append(textTitle);


const userName = 'John';

h1El.textContent = `Heading title element ${userName}`;


contentEL.append(h1El);
contentEL.prepend(headerEl);
*/

/*
4

const contentEl = document.querySelector('.content');

const h2El = document.createElement('h2');
const pEl = document.createElement('p');

h2El.textContent = "Название статьи";
pEl.textContent = "Произвольный текст";

contentEl.prepend(h2El);
contentEl.append(pEl);
*/

/*

5

const contentEL = document.querySelector('.content');
const h1El = document.createElement('h1');
const headerEl = document.createElement('header');
//const titleEl = document.querySelector('.title');
//titleEl.classList.remove('title')

headerEl.innerHTML = '<span>text header</span>';
headerEl.classList.add('header');
console.log(headerEl.classList.contains('header'));

headerEl.classList.remove('header');
console.log(headerEl.classList.contains('header'));

headerEl.classList.toggle('header');

console.log(headerEl.classList.contains('header'));

//const textTitle = document.createTextNode('new heading node');
//h1El.append(textTitle);


const userName = 'John';

h1El.textContent = `Heading title element ${userName}`;
h1El.style.color = 'forestgreen';
h1El.style.backgroundColor = 'gray';


contentEL.append(h1El);
contentEL.prepend(headerEl);

*/
/*
6

function firstFunc() {
    console.log('first function');
}

function secondFunc() {
    console.log("second function");
}

firstFunc();
secondFunc();

*/

/*
7 

function hello(name) {
    console.log(`Hello, ${name}`);
}

function sayHello(callback) {
    const userName = prompt('Ваше имя')
    callback(userName);
}

sayHello(hello);

*/
/*

8

function age(age){
if(age >=18 18) {
    console.log("Добро пожаловать на наш взрослый сайт!");
}else {
    console.log("Извините, доступ только для совершеннолетних");
}
}
function processUserInput (callback) {
    const userAge = prompt('Введите Ваш возраст');
    callback(userAge);
}

processUserInput(age);

*/
/*

9

const buttonEl = document.querySelector('.button');
const titleEl = document.querySelector('.title');


buttonEl.onclick = function () {
    // console.log('Hello click');

    titleEl.textContent = "New text click";
    buttonEl.classList.toggle("blue")
    buttonEl.style.backgroundColor = 'red';


}

*/
/*
10

const contentEL = document.querySelector('.content');
const buttonEl = document.querySelector('.btn');

const blockEl = document.createElement("div");
blockEl.classList.add('block');
blockEl.textContent = "New block"

buttonEl.onclick = function () {
    contentEL.append(blockEl);
}
    */

/*

11


const buttonEl = document.querySelector('.myButton');
const counterEl = document.querySelector('.counter');
let count = 0;
buttonEl.onclick = function() {
    count++;
    counterEl.textContent = `Счетчик: ${count}`;
}

*/
/*
12

let cartElem = document.querySelector('#cart');

function addToCart(num) {
    let product = document.createElement("li");
    cartElem.append(product);
    product.textContent = num;
}
    
*/


// ARR
/*

1

let arr1 = new Array();
const arr2 = ['шкаф', 'стул', 'комод'];
console.log(arr1);
console.log(arr2);

console.log(arr2[0]);
console.log(arr2[1]);

arr2[0] = 'стол';
console.log(arr2);

arr2[3] = 'шкаф';
console.log(arr2);

arr2[6] = 'диван';
console.log(arr2);

console.log(arr2.length); 
arr2[arr2.length] = 'табуретка';
console.log(arr2, arr2.length);

*/
/*
2

const products = ['шкаф', 'стул', 'комод'];

//products.push('стол');
//products.pop();
//const lastProduct = products.pop();
//products.shift();
//const firstProduct = products.shift();
//products.unshift('табуретка');

console.log(products);
//console.log(lastProduct);
//console.log(firstProduct);

*/
/*
3

let i = 0;
while(i<3){
console.log('hello while');
i++;
}

4


while(true) {
    console.log(1);
    break;
}

5

let ready = confirm('Согласен ли');
while(ready === false){
    alert('Вам нужно согласиться с условием');
    ready = confirm('Согласен ли');
}
*/
/*
6

while(!confirm('Согласен ли')) {
    alert('Вам нужно согласиться с условиями');
}
*/
/*
7

let pass = prompt('Введите пароль');

while(pass !== 'пароль'){
    alert('Не угадал, давай ещё раз');
    pass = prompt('Введите пароль');
}

*/
/*
8

let pass;
let counter = 0;
do {
    if (counter > 1) {
        if (confirm('хотите выйти')) {
            break;
        }
    }
    pass = prompt('Введите пароль');
} while (pass !== 'пароль');

*/