function info(lesson){
    switch(lesson){ 
    case 1: 
        console.log('Инфа про сплайс');
        break;
    case 2:
        console.log('Инфа');
        break;
    case undefined:
        break;
    default:
        return console.log('Ничего');
    }
}

const answer = prompt('Вывести информацию о текущих уроках?');
if(answer ==='да'|| answer ==='yes'){
    console.log('info(lesson)'); // сюда запихнуть считыватель названий функций
}
const lesson = Number(prompt('Что вывести'));
console.log(info(lesson));