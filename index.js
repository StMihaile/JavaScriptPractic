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

17

function calc() {
    let a = 10;
    let b = 20;
   console.log(a+b);
}

calc();
