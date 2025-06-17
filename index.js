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
/*
9

for (let i = 0; i < 3; i++) {
    console.log('hello for');
}
    */
/*
10
const contentEL = document.querySelector('.content');
for (let i = 1; i <= 3; i++) {
const h2El = document.createElement('h2');
h2El.textContent = 'Hello for in html'
contentEL.append(h2El);
    
}

*/
/*
11

const contentEL = document.querySelector('.content');
for (let i = 1; i <= 33; i++) {
const h2El = document.createElement('h2');
h2El.textContent = `${i} Заголовок на странице`
contentEL.append(h2El);
    
}*/
/*
12

const products = ['шкаф','стол','стул'];
for (let i = 0; i < products.length; i++) {
    const elem = products[i];
    console.log(elem);   
}
    */
/*
13
const contentEL = document.querySelector('.content');
const products = ['шкаф', 'стол', 'стул', 'диван'];
for (let i = 0; i < products.length; i++) {
    const h3El = document.createElement('h3');
    h3El.textContent = `Товар номер ${i + 1}`;
    const nameProduct = document.createElement('p');
    nameProduct.textContent = products[i];
    contentEL.append(h3El);
    contentEL.append(nameProduct);
}   
    */
/*
14


const contentEL = document.querySelector('.content');
const products = ['шкаф', 'стол', 'стул', 'диван'];

for (const key in products) {
    console.log(key);
}

for (const key in products) {
    console.log(products[key]);
}

*/
/*
15

const contentEL = document.querySelector('.content');
const products = ['шкаф', 'стол', 'стул', 'диван'];

for (const element of products) {
    console.log(element);
}

for (const element of products) {
    const h3El = document.createElement('h3');
    h3El.textContent = element;
    contentEL.append(h3El);
}

*/
/*
16

let product = ["Мышка", "Клавиатура", "Наушники"];
product.push('Монитор');
product.push('Принтер');
product.push('Флешка');
const productEl = document.querySelector('.products');

for (const element of product) {
    const liEl = document.createElement('li');
    liEl.textContent = element;
    productEl.append(liEl);
}
*/
/*
17

const numbers = [12, 5, 8, 20, 3, 6, 8, 19];
let min = numbers[0];
let max = numbers[0];
for (const element of numbers) {
    if (element < min) {
        min = element
    }
    if (element > max) {
        max = element
    }

}

const array = document.querySelector('.all-elements');
const buttonMin = document.querySelector('.min');
const buttonMax = document.querySelector('.max');
const minNumber = document.querySelector('.minNumber');
const maxNumber = document.querySelector('.maxNumber');

for (const element of numbers) {
    array.textContent += element + ", ";
}

buttonMin.onclick = function () {
    minNumber.textContent = min;
}

buttonMax.onclick = function () {
    maxNumber.textContent = max;
}

*/
/*
18

const arr = ['Кофе', 'Сок', 'Чай', 'Вода', 'Молоко'];
const search = "Вода";

let result = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        result = i;
        break;
    }
}

19


function find(arr, search) {
    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i
        }
    }
    return -1;
}
console.log(find(arr, 'Вода'));
console.log(find(arr, 'Смузи'));
console.log(find(arr, 'Чай'));

*/

/*

20

function filter(arr, search) {
    let result = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i;
            break
        }
    }
    return result;
}

const users = ['Яна', 'Олег', 'Витя', 'Саша', 'Таня', 'Яна', 'Василий', 'Евгения', 'Настя'];

const listEl = document.createElement('ul');
for (let i = 0; i < users.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `${i + 1}) ${users[i]}`;
    listEl.append(liEl)
}
document.body.append(listEl);

*/

/*
21


const users = ['Яна', 'Олег', 'Витя', 'Саша', 'Таня', 'Яна', 'Василий', 'Евгения', 'Настя'];
function renderList(arr) {
    const listEl = document.createElement('ul');
for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `${i + 1}) ${arr[i]}`;
    listEl.append(liEl)
}
document.body.append(listEl);
}

renderList(users);

*/
/*
22

function find(arr, search) {
    let result = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i;
            break
        }
    }
    return result;
}

const users = ['Яна', 'Олег', 'Витя', 'Саша', 'Таня', 'Яна', 'Василий', 'Евгения', 'Настя'];
function renderList(arr) {
    const listEl = document.createElement('ul');
for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `${i + 1}) ${arr[i]}`;
    listEl.append(liEl)
}
document.body.append(listEl);
}

const seaechBtn = document.createElement('button');
seaechBtn.textContent = 'Поиск';
document.body.append(seaechBtn);

seaechBtn.onclick = function() {
    const search = prompt('Укажите имя для поиска');
    
    const findIndex = find(users,search);

    if(findIndex > -1) {
        document.querySelector(`li:nth-child(${findIndex+1})`).style.color = 'red';
    }else{
        alert('Имя не найдено');
    }

}

renderList(users);

*/

/*
23

const arr = [19, 21, 11, 5, 18];
const result = [];
for (const elem of arr) {
    if (elem >= 18) {
        result.push(elem)
    }
}
console.log(result);
*/
/*
24

const arr = [19, 21, 11, 5, 18];

function filter(arr, minAge) {
    const result = [];
    for (const elem of arr) {
        if (elem >= minAge) {
            result.push(elem)
        }
    }
    return result;
}
console.log(filter(arr, 18));
console.log(filter(arr, 10));

*/

/*
25

function filter(arr, minAge) {
    const result = [];
    for (const elem of arr) {
        if (elem >= minAge) {
            result.push(elem)
        }
    }
    return result;
}

const userAge = [11, 23, 34, 11, 12, 4, 55, 21, 23];

function renderList(userAge) {
    listEl.innerHTML = '';
    for (let i = 0; i < userAge.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1} возраст: ${userAge[i]}`
        listEl.append(liEl);
    }
}

const filterBtn = document.createElement('button');
filterBtn.textContent = 'Фильтр';
document.body.append(filterBtn);

filterBtn.onclick = function () {
    const minAge = prompt('Введите возраст');

    const result = filter(userAge, minAge);

    renderList(result);
}


const listEl = document.createElement('ul');
document.body.append(listEl);

renderList(userAge)

*/
/*
26

let A = 7;
let B = 3;
let C = 1;

console.log(A, B, C);

if (A > B) {
    let temp = A;
    A = B;
    B = temp;
}

if (B > C) {
    let temp = B;
    B = C;
    C = temp;
}

if (A > B) {
    let temp = A;
    A = B;
    B = temp;
}
console.log(A, B, C);

*/
/*
27

const arr = [7, 3, 9, 4, 5];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

    }
}

console.log(arr);

*/
/*
28

const arr = [7, 3, 9, 4, 5];
function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }
    return array;
}

console.log(sort(arr));
*/

/*
29


function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }
    return array;
}

const usersAge = [11, 23, 34, 11, 12, 4, 55, 21, 23];

function renderList(arr) {
    listEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) Возраст: ${arr[i]}`;
        listEl.append(liEl);
    }
}


const sortBtn = document.createElement('button');
sortBtn.textContent = 'Сортировать';
document.body.append(sortBtn);

sortBtn.onclick = function () {
    const result = sort(usersAge);
    renderList(result);
}

const listEl = document.createElement('ul');
document.body.append(listEl);

*/
/*

30

 let str = 'Hello World new'
 console.log(str.length);

 console.log(str[0]);

 console.log(str[5]);

 let newStr = str.toLowerCase();
 console.log(newStr);

 console.log(str.indexOf('l'));
 console.log(str.lastIndexOf('l'));

 console.log(str.slice(0, 5));

 console.log(str.substring(6, 11));

 console.log(str.replace('World', 'Mars'));

 console.log(str.split(' '));

 console.log(str.trim());

 console.log(str.startsWith('Hello'));

 console.log(str.endsWith ('new'));
*/
/*

31

let app = document.querySelector('#app');
let product = ['Шкаф',
    'Стул',
    'Стол',
    'Шкаф'
];

product.forEach(element => {
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = element;
    let textEl = document.createElement('p');
    textEl.textContent = 'text info product';
    app.append(h3Elem);
    app.append(textEl);
});

console.log(product.indexOf('Стул'));
console.log(product.lastIndexOf('Стул'));
console.log(product.includes('Стул'));

console.log(product.find(item=>item == 'Стул'));

*/
/*
32

function sum(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function calc(a,b,funcName) {
    return funcName(a,b)
}

console.log(calc(5,10,sum));
console.log(calc(5,10,sub));
*/
/*
33

setTimeout(() => {
    console.log('Хорошо, что вы пришли к нам на сайт');
}, 5000);

console.log('Хорошо, что вы пришли к нам на сайт');

setInterval(hello, 10000)
   function hello() {
    return console.log('Хорошо, что вы пришли к нам на сайт');
}
;


function hello() {
    return console.log('Хорошо, что вы пришли к нам на сайт');
}

*/
/*
34

const arr = [1, 2, 3];

arr.forEach(element => {
    console.log(element)
});
*/
/*
35

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter(number => number % 2));
console.log(arr.filter(number => number >= 2));
console.log(arr.filter(number => number < 3));

*/

/*

36

const productPrice = [1000, 500, 2500, 1500, 2000];

console.log(productPrice.filter(priceInfo));

function priceInfo(elem) {
    return elem > 1000;
}
    */
/*
37

const arr = [1000, 400, 2500, 40, 500, 300, 70]

console.log(arr.map(item => item * 0.9));

*/
