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