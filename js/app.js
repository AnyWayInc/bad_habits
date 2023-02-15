// 1 упражнение

/* Реализацтя первого упражнения
const moneyInTime = 80;
const timeInDay = 5;
const timeInWeek = timeInDay * 5;
const dayInWeek = 5;
const timeOnWork = 40;
const dayBeforeVacation = 11;
const freeTime = timeInDay * dayBeforeVacation;

console.log(timeOnWork>=freeTime? "No" : onclusionMoney = timeOnWork * moneyInTime+ "$");

if(timeOnWork>=freeTime){
    console.log("No");
}else{
    console.log("Yes");
    conclusionMoney = timeOnWork * moneyInTime;
    console.log("Я попрошу : ", conclusionMoney + "$");
}
*/


//2 упражнение

/*
const deposit = 12000;
const procent = 0.07;
const priceHouse = 13500; 
const result = deposit * (1 + procent / 12) ** 24;

if(result>priceHouse){
    const summAfterBuy = result - priceHouse;
    console.log("Вася сможет купить дом, и у него останется:", summAfterBuy + "$");
}else{
    console.log('Вася не сможет купить дом, так как не хватает денег')
}
*/


//3 упражнение 

/*
const num = 7 
let userNum;
const slog = prompt("Выберите + или -");

if(slog==='+'){
    userNum = prompt(`Сколько будет ${num} + 15`);
}else if(slog==='-'){
    userNum = prompt(`Сколько будет ${num} - 15`);
}else{
    alert('Ты чет не то ввел!');
}


if(Number(userNum) === 22){
    console.log('Успех');
}else if (Number(userNum) === -8){
    console.log('Успех');
}else if (userNum === 'Я не робот'){
    console.log('Успех');
}else {
    console.log('Вы робот!');
}
*/


//4 упражнение

/*
const balance = 1000;
const isBanned = true;//акк не забанен
const isSalling = true;//игра в продаже
const isErist = true //игра не куплена
const bonusAvaible = 100;

const buyGame = (balance>= 1000 || bonusAvaible>=100) && isBanned && isSalling && isErist ;
console.log(buyGame);
*/


//5 упражнение

/*
const pow = (num, power) => {
    return res = num ** power;
}

console.log(pow(2,5));
*/


//6 упражнение

/*
function dateOfUser(age,work,money,productPrice){

    if(money>=productPrice){
        console.log( 'Ты можешь купить', productName);
        return true;
    }

    if(money<productPrice){

        if(age>=24 && (work.toLowerCase === 'yes'|| work.toLowerCase === 'да')){
            money = money + 500;
            console.log('Вам дали кредит на 500$');

            if(money >= productPrice){
                console.log('Ты можешь купить', productName);
                return true;
            }else{
                console.log('Вам по прежнему не хватает денег на', productName);
                return false;
            }

        }else if (age>=24){
            money = money + 100;
            console.log('Вам дали кредит на 100$');
            
            if(money >= productPrice){
                console.log('Ты можешь купить ', productName);
                return true;
            }else{
                console.log('Вам по прежнему не хватает денег на', productName);
                return false;
            }

        }else if (age<24&& money<productPrice){
            console.log('Ты не можешь купить', productName);
            return false;
        }
    }
}

const age = Number(prompt('Введите ваш возраст'));
const work = String(prompt('Вы трудоустроены?'));
let money = Number(prompt('Введите количество ваших денег'));
const productPrice = Number(prompt('Введите стоимость продукта'));
const productName = String(prompt('Введите имя продукта'));

console.log(dateOfUser(age,work,money,productPrice));
*/


//7 упражнение

/*
//Объевление массива
const tasks = ['Задача 1','Задача 2','Задача 3'];
console.log(tasks);

//Добавление элемента в конец
const addEnd = tasks.push('Задача 4');
console.log(tasks);

//Удаление элемента через поиск его индекса
const arr = tasks.indexOf('Задача 2');
const deleteEnd = tasks.splice(arr,1);
console.log(tasks);

//Добавление элемента по индекса в начало
const arr2 = tasks.indexOf('Задача 3');
const addStart = tasks.splice(arr2,1);
const joinoble = addStart.join(); // или addStart[arr2];
//console.log(joinoble2 = addStart.concat(tasks)); //выполнение через слияние массива
const addTo = tasks.unshift(joinoble);
console.log(tasks);
*/


//8 упражнение
//На вход получаем url которую нужно будет разделить на состовляющие и оформить в виде функции
/*
function Razdel (url){
    const urlChanging = url.split('/');
    const urlWithoutGarbage = urlChanging.splice(1,1);
    const [protocol,domen,...site] = urlChanging;
    const proto = protocol.split(':');
    const other = site.join('/')
    console.log('Протокол:'+ proto + '\n' , 'Домен:'+ domen + '\n' , 'Путь к сайту:'+ '/' + other );
}

Razdel('https://purpleshool.ru/course/js');
*/


//9 упражнение

/*
const arr = ['!','JS','люблю','Я'];
const result = [];

for(let i = arr.length-1 ; i >= 0 ; i--){
    result.push(arr[i]);
}

console.log(result.join(' '));
*/


//10 упражнение

/*
const operation = [1000,-700,300,-500,10000];
let balance = 100;
const Dohod = [];
const Rashod = [];
let avgDohod = 0;  
let avgRashod = 0;  

function getBalance(balance,operation){
    
}

function Rashet(balance,operation){

    for (let index in operation){
        balance += operation[index];
        if(balance < 0){
            console.log(false);
        }
        if(operation[index]>0){
            Dohod.push(operation[index]);
        }
        if(operation[index]<0){
            Rashod.push(operation[index]);
        }  
    }

    for (let index in Dohod){
        avgDohod += Dohod[index];
    }
    
    for (let index in Rashod){
        avgRashod += Rashod[index];
    }
    
    console.log('Средний доход', avgDohod/Dohod.length);
    console.log('Средний расход', avgRashod/Rashod.length);
    console.log('Итоговый баланс', balance );

}

Rashet(balance,operation);
*/


//11 упражнение 

/*
const prices = [[100, 200],[120, 100],[200, 350]];

const positivePrices = prices.map(pricesEl =>{
    if(pricesEl[0]<pricesEl[1]){
        return pricesEl[1]-pricesEl[0];
    }
}).filter(pricesEl=>{
    return pricesEl > 0;
});
console.log(positivePrices);
*/


//12 упражнение

/*
const arr = [1 , 4, 4, 10];

const average = arr.reduce((acc,value,i)=>{
    if(i != arr.length-1){
        return acc + value;
    }else{
        return (acc + value) / arr.length;
    }
},0);

console.log(average);
*/


//13 упражнение

/*
const arr = [2, 4, 4, 10, 20];

function some(arr,value){
    const newArr = arr.find(el=>el === value);
    return (newArr === undefined) ? false: true;
}

console.log(some(arr,4));
*/


//14 упражнение 

//Работа с sort
/*
    const operations = [100,-11,-123,213,1252];
    //<0 то будет выводить порядок a,b
    //>0 то будет выводить порядок b,a

    operations.sort((a, b)=> a-b); //сортировка от меньшего к большему
    console.log(operations);
*/

//Быстрое создание массивов
/*
    const arr = [1,2,3,4,5];

    console.log(new Array(1,2,3,4,5));
    const arr2 = new Array(5);//быстрое создание пустого массива из 5 элементов перед тем как с ним работать нужно его заполнить
    arr.fill(1);//Весь массив заполняется 1 arr.fill(1,0,3) с 0 позиции до 3 заполняется 1
    const arr3 = Array.from({length:5},(cur,i)=> i+1); Также как fill запонлняем массив по i+1 [1,2,3,4,5]; 
*/

//Раздел работы со строками

/*
    const userName = 'Вася Пупкин';
    console.log(userName[0]);//Выведет 'В'
    console.log(userName.charAt(2));//Выведет 'c' выводит символ 
    //Эмоджи занимают 2 или больше символа так что может некорректно работать
    console.log(userName.length);//Длина строки
    console.log(userName.indexOf('П'));//Выведет индекс буквы 'П', если буквы 2 то выведет первое встречающееся , если ввести 2 буквы то выведет индекс первого попавшегося идентичного сочетания
    console.log(userName.lastIndexOf('П'));//Выведет индекс буквы 'П', если буквы 2 то выведет последнее встречающееся
    console.log(userName.includes('уп'));//Проверить наличие буквы/сочетания букв
    console.log(userName.slice(4));//Обрезает все что после 4 элемента и выводит в отдельный массив
*/

//Вывести Имя и Фамилию в отдельные переменные 
/*
    const userName = 'Вася aka Terminator Пупкин';

    const firstName = userName.slice(0,4);
    const secondName = userName.slice(userName.length-6);
    console.log(firstName, secondName);
*/


//15 упражнение


//Преобразование строки 
/*
    const str = 'Вася Пупкина';
    console.log(str.includes('a'));// Выводит наличие 'а'
    console.log(str.startsWith('В'));// Начинается с 'В' тогда выводит true 
    console.log(str.endsWith('н'));//Заканчивается 'н' то выводит true
    console.log(new String('Вася Пупкин').includes('а'));// Создание нового объекта типа строка и выводит true если в ней есть 'а'

    console.log(str.toLowerCase());//Все с маленькой
    console.log(str.toUpperCase());//Все с большой 
    console.log(str.replace('В','Ф'));//Заменяет первую'В' на 'Ф' возвращая новую строку 
    console.log(str.replaceAll('а','и'));//Заменяет все 'а' на 'и' возвращая новую строку 
    console.log(str.replace(/а/g,'и'))//Заменяет все 'а' на 'и' возвращая новую строку 

    const str2 = 'Вася Пупкина  \n';
    console.log(str.trim());//Очищает все пробелы в строке есть trimStart и trimEnd которые очищают пробелы в начале и конце соотвественно
    
*/

//Проверить являются ли это номером телефона РФ


/*Верные*/
// const num1 = '89103235356';
// const num2 = '89103235356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910)323-53-56';
// const num5 = '  +7(910)323-53-56  ';

// /*Не верные*/

// const num1Error = '89103235';
// const num2Error = '+7d9103235';
// const num3Error = '9+79103999235';
// const num4Error = '89103g21235';


//const currentNumber = String(prompt('Введите номер телефона'));

// function checkNumber (currentNumber){

//     currentNumber = currentNumber.trim();
//     currentNumber = currentNumber.replace('+7','8');

//     if(!currentNumber.startsWith(8)){
//         return false;
//     }

//     currentNumber = currentNumber.replaceAll('(','');
//     currentNumber = currentNumber.replaceAll(')','');
//     currentNumber = currentNumber.replaceAll('+','');
//     currentNumber = currentNumber.replaceAll('-','');


//     if(currentNumber.length == 11 && !isNaN(Number(currentNumber)) ){ //Проверяет является ли то что внутри строки Not a Number
//         return true ;
//     }else{
//         return false;
//     }
// }

// console.log(checkNumber(num1));
// console.log(checkNumber(num2));
// console.log(checkNumber(num3));
// console.log(checkNumber(num4));
// console.log(checkNumber(num5));

// console.log(checkNumber(num1Error));
// console.log(checkNumber(num2Error));
// console.log(checkNumber(num3Error));
// console.log(checkNumber(num4Error));


//16 упражнение

//Строки и массивы 

// const userFullName = 'Вася Пупкин Васильевич';
// console.log(userFullName.split(' ')); //[Вася] [Пупкин] [Васильевич]
// const [firstName,familyName,lastName] = userFullName.split('');//Тут получится Вася Пупкин Васильевич в разных переменных
// //И выведем их , если хотим превратить из массива в строку то используем метод join

//Дополнение строк
// const film = 'Звездные Воины';
// console.log(film.padStart(24,'*'));//Доболяет символов до указанной длины строки  **********Звездные Воины
// console.log(film.padEnd(24,'*'));//Тоже самое только в конец указанной строки
// console.log(film.repeat(10));//Повторяет строчку указанное количество раз


/*Замаскировать все, кроме последних 4х символов*/
// const card = '2342834503458353';
/* ***********8353 */
// const newCard = card.slice(card.length-4);
// console.log(newCard.padStart(card.length,'*'));


//17 упражнение 

//Работа с объектами 
// const userArray = ['Вася', 'Пупкин', 24];
// const user = {
//   name: 'Вася',
//   secondName: 'Пупкин',
//   age: 24,
//   skills: [
//     'Программирование',
//     'Готовка'
//   ],
//   1:1//Объект в виде ключа может содержать цифру и символы 
// };

//Обращениек элементам 

// const user2 = {
//     name: 'Вася',
//     secondName: 'Пупкин',
//     age: 24,
//     skills: [
//       'Программирование',
//       'Готовка'
//     ],
//     eduBasic: 'Школа 10',
//     eduPro: 'МФТИ'
// }

// console.log(user2.name);//Выводим имя по ключу, можно вывести любой атрибут, это обращение не доступно для расчетных средств
// console.log(user2.skills[0]);//Программирование
// console.log(user2['skills'])// будет идентично только это другой способ обращения к ключу объекта, это обращение доступно для расчетных свойств
// const level = 'Pro';
// console.log(user2['edu' + level]);// обратится к элементу eduPro, через user2.'edu' + level не будет работать 

// const res = prompt('Введите свойство ');
// console.log(user2.res);//Выведет элемент по ключу который указал пользователь
// user2['city'] = 'Москва';//Создание нового свойства
// console.log(user2);//Добавляет ключ city со свойством Москва в объект

// user2.age = 30;//Модифицирует свойство объекта age 
// user2['age']= 30;
// console.log(user2);


/*Отсортировть пользователе по возрасту */

// const users = [
//     {name:'Вася',age: 30},
//     {name:'Катя',age: 18},
//     {name:'Аня',age: 40},
//     {name:'Петя',age: 25}
// ];

// console.log(users.sort((a, b)=> a.age-b.age));


//18 упражнение

/*Преобразовать пользователей до вида 
    {fullname:'Вася Пупкин', skillNum: 2}
*/

// const users = [
//     {
//         name: 'Вася',
//         surname: 'Пупкин',
//         age: 30,
//         skills: ['Разработка','DevOps']
//     },
//     {
//         name: 'Катя',
//         surname: 'Бепова',
//         age: 18,
//         skills: ['Дизайн']
//     }
// ];

// const newUser = users.map((el)=>{
//     return{
//         fullname : `${el.name} ${el.surname}`,
//         skillNum : Number(el.skills.length)         //Выводит в переменную newUser объект свойства которых вычисляются через свойства другого объекта благодаря map
//     }
// })


// console.log(newUser);

//Методы объкетов

// const user = [
//     {
//      name: 'Вася',
//      surname: 'Пупкин',
//      age: 24,
//      getFullName: function(name,surname){
//         return this.name + ' ' + this.surname;//Обращается к названию объекта в котором объявлен
//      }
//      }
// ];

// // function getFullName(user){
// //     return user.name + ' ' + user.surname;
// // }

// user.getFullName('Вася', 'Пупкин');
// const arr = [1,2];
// arr.sort();
// 'aFASASDdq'.toLowerCase();


//19 упражнение

/*
Реализовать методы увелечения и уменьшение баланса, при котором каждая операция сохраняется в виде
{reason: 'Оплата налогов', sum: -100} 
Возвращается true, если успешно и false если не хватает баланса. Также реализовать вывод числа операций по кошельку
*/

// const walet = {
//     balance: 0,
//     operation: [],
//     increase: function (sum,reason){
//         this.balance+=sum;
//         this.operation.push({
//             reason: reason,//если название ключа и переменной совпадают то reason можно опустить 
//             sum: sum
//         })
//         return true;
//     },
//     decrease: function (sum,reason){
//         if(this.balance < sum){
//             console.log('Не хватает денег');
//             return false;
//         }
//         this.balance-=sum;
//         this.operation.push({
//             reason: reason,
//             sum: sum
//         })
//         return true;
//     },
//     getOperationLenght: function (){
//         return this.operation.length;
//     }
// }


// console.log(walet.increase(1000, 'sads'));
// console.log(walet.getOperationLenght());
// console.log(walet.decrease(5000,'sfads'));
// console.log(walet.getOperationLenght());
// console.log(walet.increase(500,'ssdasdaads'));
// console.log(walet.getOperationLenght());


//Итерирование по объекту 


// const cities = {
//     msk:{
//         temp:25
//     },
//     spb:{
//         lt:100,
//         temp:20
//     }
// }

// let avgTemp = 0;
// let citiesCount = Object.keys(cities).length;//Выводи все ключи объекта и выводит сколько их всего
// for(const key in Object.keys(cities)){
//     avgTemp+=cities[key].temp;
// }
// console.log(avgTemp/citiesCount);


//Деструктуризация и rest 

// const arr = [1,3,4];
// const [z,y,x] = arr;
// // z = 1 , y = 3 , x = 4 

// let user = {
//     name: 'Вася',
//     age: 40, 
//     city: 'Москва'
// };

// const {age, ...userWithoutAge} = user; // userWithoutAge вывыодит все остальные свойства объекта
// console.log(age);
// console.log(name);

// const additionalData = {
//     skills: ['Разработка','Дизайн'],
//     creditCard: '2143121321312'
// };
// //Сначала создаем ключ с именем skills в user, а потом кладем в объект user объект additionalData и передаем в него свойство skills
// user.skills = additionalData.skills; 
// // передали еще 1 свойство
// user.creditCard = additionalData.creditCard;

// //Совместили ключи 2х объектов с помощью spread оператора
// user = {
//     ...user,
//     ...additionalData
// }
// console.log(user);


//Опциональные chaining

// const cities = {
//     msk:{
//         temp:{
//             celcuis: 25
//         }
//     },
//     spb:{

//     }
// }

// const city = 'krd';
// //Смотрим если у spb ключ temp, если нет то ничего нету
// if(cities.spb && cities.spb.temp){
// // if(cities[city]!= undefined && ciies[citi].temp!=undefined) Аналогичная запись    
//     console.log(cities.spb.temp.celcuis);
// }

// //Аналогичная конструкция с if оператором 
// console.log(cities[city]?.temp?.celcuis); 


//20 упражнение

/*
    Сделать объект склад с методом добавления на склад, 
    поиска по складу товара и расчеm его веса
*/

// const wareHouse = {
//     goods:[],
//     findGoodById: function (name) {
//         return name.id || this.goods.map(el=>{if(el.name===name){
//             return el.id
//         }}).join('');
//     },
//     addGood: function (name,kg) {
//         this.goods.push({name:name,id:this.goods.length+1,weight:{kg:kg}})
//     },
//     getWeightKg: function () {
//         return this.goods.reduce((acc,value)=>acc+value.weight.kg,0);
//     }
// };

// /* Товары */
// const car = {
//     id:1,
//     weight:{
//         kg:1000
//     },
//     brand:'Ford'
// };

// const chair = {
//     id:2,
//     weight:{
//         kg:2
//     }
// };

// const paper = {
//     id: 3,
//     color: 'red'
// };

// wareHouse.addGood('chair',100);
// wareHouse.addGood('chasd',100);
// wareHouse.addGood('gsdfa',100);
// wareHouse.addGood('gsdfфвa',600);
// console.log(wareHouse.goods);
// console.log(wareHouse.findGoodById('chasd'));
// console.log(wareHouse.getWeightKg());


//21 упражнение

//Пример примитивов объектов

// 'use strict'

// const user = {
//     name: 'Anton',
//     id: 2,
//     roles:['Admin']
// }

// const newUser = user;
// user.name = 'NewUser';
// //Выдаст 2 объекта с одинаковыми ключами и содержимым так как обращаемся к 1 ссылке в стеке
// console.log(user);
// console.log(newUser);

// //Выдаст 2 объекта user{name:'Anton',id 1} и newUser{name:'NewUsers',id=1} так как сначала создается новый объект а потом туда кладется user и переназначается имя
// const newUser2 = Object.assign({},user);
// user.name = 'NewUsers';
// console.log(user);
// console.log(newUser2);

// //Берет все свойства из 1 объекта и копирует их в новый так что все будет гуд
// const newUser3 = {
//     ...user
// };
// newUser3.name = 'NewUsers';
// //Пополнятся будет массив roles как в user так и newUser3 так как ссылка на массив содержится в объекте который мы скопировали
// newUser3.roles.push('User');
// console.log(user);
// console.log(newUser3);


//Пример scope chsin

// 'use strict';

// let successMessage = 'Nice';
// const user = {
//     name: 'Vasya',
//     roles: []
// }

// function addRoles(user,role){
//     if(role == 'admin'){
//         const message = 'Fail';
//         console.log(message);
//         //Выдаст ошибку так как a в другом блоке т.е. в функции 
//         console.log(a);
//         return user;
//     }
//     user.push(role);
//     //Можем изменить так как successMessage имеет глобальный скоуп
//     successMessage = 'Ура';
//     //А тут уже так как написано let то объявляется новая переменная не имеющая отношения к глобальной successMessage 
//     let successMessage = 'Ура';
//     console.log(successMessage);

//     function logRoles(){
//         const a = 3;
//         console.log(user.roles);
//     }
//     logRoles();
//     return user;
// }

// //Обратилось к глобальному successMessage
// console.log(addRoles(user, 'dev')); 


//Пример поднятия 

// addUser();
// //Ошибка так как a объявлена ниже 
// console.log(a);
// //undefined так как var является переменной окружения но до ее объявления будет undefined
// console.log(b);
// const a = 3;
// var b = 2;

// function addUser(){
//     // console.log('User added');
// }

// //undefined
// arr1();
// var arr1 = () => {
//     console.log('arr1');
// }
// //var не узай 
// addUser();


//Ключевое слово this

// 'use strict';

// //this = window
// console.log(this);

// function addNum(num1,num2){
//     //undefined а без стрикт режима будет window объект
//     console.log(this);
//     return num1 + num2;
// }

// const addNum2 = (num1,num2) => {
//     //window объект
//     console.log(this);
//     return num1 + num2;
// }

// const user = {
//     name: 'Vasa',
//     surname: 'Pupkin',
//     getFullName: function(){
//         //Выведет объект user
//         console.log(this);
//         return this.name + ' ' + this.surname;
//     }
// };

// const user2 = {
//     name: 'Marina',
//     surname: 'Kats',
// };

// //Выведет полное имя user2
// user2.getFullName = user.getFullName;
// user2.getFullName();

// addNum();

// //undefined так как у this нету ни name ни surname
// const getFullName = user2.getFullName;
// getFullName();


//Контекст в методах 

// const user = {
//     name: 'Vasa',
//     surname: 'Pupkin',
//     age: 20,
//     getUserInfo: function(){
//         //Выдаст объект user
//         console.log(this);
//         console(this.name + ' ' + this.surname);
        
//         //Если сделать стрелочной функцией то все будет ок так как стрелочная функция не является scope объектом 
//         //и получается что this обращается к объекту user(this обращается на 1 уровень выше)
//         function canDrink(){
//             //this обращается вверх, а так как эта функция обернута в функцию getUserInfo 
//             //то this возвращает undefined и undefinde.age = выдаст ошибку
//             if(this.age >= 18){
//                 console.log('Ok');
//             }else{
//                 console.log('Not ok');
//             }
//         }
//         canDrink();
//     },
//     //Тут будет плохо так как он обращается на 1 уровень выше, то есть к глобальному уровню window
//     getUserInfoArrow: () => {
//         //Выдает window 
//         console.log(this);
//         console(this.name + ' ' + this.surname);
//     }
// }

// //Vasa Pupkin
// user.getUserInfo();
// //undefined
// user.getUserInfoArrow();


//Arguments

// 'use strict'
// //ler, var, const, func, arguments
// //Scope chain
// //this

// function sumNum(num1, num2){
//     //undefined
//     console.log(this);
//     //Выведет объект который содержит наши аргументы которые мы передаем в функцию также тут можно получить конкретный аргумент по индексу
//     console.log(arguments);
//     return num1 + num2;
// }

// //Можем ввести больше или меньше аргументов ничего не сломав
// console.log(sumNum(1,3));


// const sumNumArr = (num1, num2) => {
//     //window
//     console.log(this);
//     //Ничего не выведет
//     console.log(arguments);
//     return num1 + num2;
// }

// //Сломается
// console.log(sumNumArr(1,3));


/*
Дополнить объект етодами для получения имени:
    -компании
    -сео
    -сотрудника
*/

// const company = {
//     name: 'ООО Агро',
//     employees: [
//         {
//             name: 'Света',
//             getName: function(){
//                 return this.name;
//             }
//         }
//     ],
//     ceo:{
//         name: 'Вася',
//         getName: function (){
//             return this.name;
//         }
//     },
//     getNameOfCompany: function (){
//         return this.name;
//     },
//     getNameCeo: function (){
//         return this.ceo.name;
//     },
//     getNameEmployees:function(){
//         return this.employees.map(el => {return el.name}).join();
//     }
// }
// //Сделано 2мя способами 
// console.log(company.getNameCeo());
// console.log(company.getNameEmployees());
// console.log(company.getNameOfCompany());
// console.log(company.ceo.getName());
// console.log(company.employees.map(el=> el.getName()));


//22 упражнение

//EOL для методов

// 'use strict';

// const b = 1;
// const a = {
//     b,
//     getB: function(){
//         return this.b;
//     },
//     //Короткая запись  getB
//     getBAlternative() {
//         return this.b;
//     }
// }

// //Выведет b
// console.log(a);


//Call, apply

// 'use strict';

// const audi = {
//     make: 'Audi',
//     model: 'A3',
//     year:2021,
//     damages: [],
//     addDamage(part, rate){
//         console.log('У авто ' + this.make + ' ' + this.year + ' добавленно: повреждение ' + part + ' со степенью ' + rate);
//         this.damages.push({
//             part,
//             rate
//         })
//     }
// }

// audi.addDamage('Капот', 1);

// const bmw = {
//     make: 'BMW',
//     model: 'X5',
//     year:2022,
//     damages: [],
// }

// //Переносим метод из ауди в бмв
// bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2);

// //Вытаскиваем метод для применения на других объектах
// const addDamageFunc = audi.addDamage;
// // addDamageFunc('Бампер', 2);
// //call вызывает функцию на каком контексте и с какими аргументами
// //Тоесть мы говорим что хотим вызвать функцию но в контексте bmw и передать в эту функцию 2 аргумента 'Бампер', 2
// addDamageFunc.call(bmw, 'Бампер', 2);
// addDamageFunc.call(audi, 'Бампер', 2);
// //Можем сделать такеже как и в apply благодаря spread оператору 
// addDamageFunc.call(audi, ...['Бампер', 2]);

// //Тоже самое только передаем массив аргументов
// addDamageFunc.apply(bmw,['Бампер', 2]);
// addDamageFunc.apply(audi,['Бампер', 2]);


//Bind

// 'use strict';

// //Bind связывает this с функцией которую мы хотим вызвать

// const audi = {
//     make: 'Audi',
//     model: 'A3',
//     damages: [],
// };

// const carManipulation = {
//     addDamage(part, rate) {
//         this.damages.push({part,rate});
//         console.log(`Добавили повреждения ${this.make} ${this.model}`);
//     }
// }

// //Теперь метод addDamage связан с объектом audi
// //Присваиваем функции свойство которое мы связываем с объектом audi
// const addDamageAudi = carManipulation.addDamage.bind(audi);
// //Передаем в audi addDamage с этими свойствами и для наглядности что все получилось выводим объект audi
// addDamageAudi('Крыло',3);
// console.log(audi);

// //Тоесть тоже самое только мы уже фиксируем первый аргумент который мы передаем в audi
// //Также можем фиксировать и 2 аргумент
// const addDamageAudiRoof = carManipulation.addDamage.bind(audi,'Крыша');
// addDamageAudiRoof(5);
// console.log(audi);


/*
    Создайте объект пользователя с паролем.
    С помощью фукнции ниже удалить пароль сделав функцию сброса пароля.
*/

// 'use strict';

// function removePassword(reset) {
//     if (reset){
//         this.password = undefined;
//     }else {
//         this.password = '1';
//     }
// }

// const user = {
//     login:'login',
//     password:'QWE123'
// }

// const removeUser = removePassword.bind(user);
// console.log(user);
// removeUser(true);
// console.log(user);


//23 упражнение

//IIFE (Сейчас более часть используют async)

// 'use strict'

// //Допусти что функция init то есть начала работы приложения должна запускаться 1 раз всего 
// function init() {
//     console.log('Start');
// }
// init();
// init();

// //Делая безымяную функцию мы не можем вызывать ее несколько раз, но js будет ругаться что функция без имены
// //Для того чтобы все заработало мы оборачиваем функцию в скобки и после них пишем скобки для вызова этой функции всего 1 раз 
// //Кроме того что функция вызывается всего 1 раз у нее есть свой scope 
// (function() {
//     console.log('Start IIFO');
//     //Мы не сможем вытащить переменные из этой функции извне
//     const a = 1;
// })();


//Замыкание

// 'use strict';

// function changeBalance (){
//     let balance = 0;
//     let key = 'asd';
//     return function(sum){
//         balance +=sum;
//         key = 'adsf'
//         console.log(`Баланс: ${balance}`);
//     }
// }

// //change равен внутренней функции которую мы описали выше 
// const change = changeBalance();
// //100
// change(100);
// //50
// change(-50);
// //250
// change(200);

// //Замыкание - это комбинация функции и его лексического окружения,
// //в котором эта функция была определена.
// //Простыми словами: функция помнит в каком контексте она была создана и может его использовать 

// //Выведет anonymous(sum), а также scope 
// //в котором выидет все переменные которые использует анонимная функция, 
// //но не видет объявленные другие переменные которые не использует анонимная функция
// console.dir(change);

// const change2 = changeBalance();
// //Баланс 100 отдельный от того который мы создали ранее
// change2(100);
// //Выведет anonymous(sum), а также scope 
// //в котором выидет все переменные которые использует анонимная функция, 
// //но не видет объявленные другие переменные которые не использует анонимная функция
// cconsole.dir(change2);


/*
    Сделать функцию пользователя, которая берет за основу userInfo
    и за счет замыкания создает новый объект, с которым можно работать 
    как с user1().increse(100)
*/

// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increse(sum){
//         this.balance +=sum;
//         this.operations++; 
//     },
// }

// function user(){
//     // //Копируем объект
//     // const userObj = userInfo;
//     //Вот так все заработает
//     const userObj = {
//         balance: 0,
//         operations: 0,
//         increse(sum){
//             this.balance +=sum;
//             this.operations++; 
//         },
//     }
//     //Замыкание
//     return function(){
//         return userObj;
//     }
// }

// const user1 = user();
// user1().increse(100);
// user1().increse(100);
// //balance = 200;
// console.log(user1());

// const user2 = user();
// user2().increse(100);
// //balance = 300;
// //Чтобы избежать взаимодействия с объектом userInfo нужно самому прописать новый объект
// console.log(user2());


//24 упражнение 


// DOM 

// 'use strict';


// addEventListener('load', () =>{
//     console.log(document);
//     console.log(document.head);
// })

// //Получаем данные из класса .panel из html
// console.log(document.querySelector('.panel').innerHTML);
// //Заменили в html текст panel на New text 
// document.querySelector('.panel').innerText = 'New text';
// //Получаем текст из .panel в переменную и потом можем с ним взаимодействовать 
// const pannelText = document.querySelector('.panel').innerText;
// //Для .input ставим изначальный текст в поле на Text
// document.querySelector('.input').value = 'Text';


//Обработка событий 

// 'use strict';


// //Добовляем ивент для кнопки при нажатии на которую в консоль выводит текст 
// document.querySelector('.button').addEventListener('click',()=>{
//     // console.log('asdas');
//     // //Отображает все что произошло при клике тоесть детали события
//     // console.log(e);
//     //Получаем значение которое ввели в поле input при нажатии на кнопку
//     const input = document.querySelector('.input').value;
//     if(!input){
//         return
//     }
//     //При проверки изменяем текст .panel на тот который ввели в input
//     document.querySelector('.panel').innerText = input;
//     //После изменения .panel очищается input
//     document.querySelector('.input').value = '';
// });

//Можем написать функцию и в html вызвать ее путем добавления свойства onclick и указываем какую функцию хотим вызвать
// function changeClick(){
//     const input = document.querySelector('.input').value;
//     if(!input){
//         return
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// }


//Обработка событий клавиатуры

// function changeClick(){
//     const input = document.querySelector('.input').value;
//     if(!input){
//         return
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// }

// //Тот же результат что и снизу только в html привязали При нажатии на кнопку Enter
// function inputChange(e){
//     if(e.code == 'Enter'){
//         //И вызывает функцию
//         changeClick();
//     }
// }
// document.querySelector('.input').addEventListener('keydown', ()=>{
//     //При нажатии на любую клавишу будет выводится в консоль 'down'
//     console.log('down');
//     //При нажатии на Enter выводит в консоль Enter
//     if(e.code == 'Enter'){
//         console.log('Enter');
//         //И вызывает функцию
//         changeClick();
//     }
// })


//Работа со стилями

// 'use strict';

// function changeClick(){
//     const input = document.querySelector('.input').value;
//     if(!input){
//         return
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     //При вводе input меняется стиль notification display = none на display = block
//     // document.querySelector('.notification').style.display = 'block';
//     //Он добавляет предварительно созданный стиль для notification в style 
//     //Можно также написать .remove тоесть удалить класс стиля 
//     document.querySelector('.notification').classList.add('notification_active');
// }

// //Тот же результат что и снизу только в html привязали При нажатии на кнопку Enter
// function inputChange(e){
//     if(e.code == 'Enter'){
//         //И вызывает функцию
//         changeClick();
//     }
// }


//Установка атрибутов 

// 'use strict';

// function changeClick(){
//     const input = document.querySelector('.input').value;
//     if(!input){
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     // document.querySelector('.notification').classList.add('notification_active');
//     //Получаем атрибут нужного нам элемента 
//     document.querySelector('.notification').getAttribute('class');
//     //Удаляет в атрибуте class все и ставит notification
//     document.querySelector('.notification').setAttribute('class', 'notification');
//     //Создаем новый атрибут key и передаем туда 1 
//     document.querySelector('.notification').setAttribute('key', 1);
//     //Создаем новый атрибут user-id и передаем туда 1 
//     document.querySelector('.notification').setAttribute('user-id', 1);
//     //И потом получаем его чтобы преобразовать его в число нужно перед этой конструкцией написать Number()
//     document.querySelector('.notification').getAttribute('user-id');
    

// }

// //Тот же результат что и снизу только в html привязали При нажатии на кнопку Enter
// function inputChange(e){
//     if(e.code == 'Enter'){
//         //И вызывает функцию
//         changeClick();
//     }
// }


//Упражнение - получение DOM элементов 

/*

*/