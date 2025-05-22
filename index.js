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



let password = prompt('Введите пароль');
let repeatPassword = prompt('повторите введённый пароль');
if (password == repeatPassword) {
    alert("Пароли совпадают");
} else {
    alert("Пароли не совпадают");
}

