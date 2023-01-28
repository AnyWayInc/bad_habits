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