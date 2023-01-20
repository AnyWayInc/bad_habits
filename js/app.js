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

