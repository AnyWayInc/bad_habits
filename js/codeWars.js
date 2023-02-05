// const dna = "AAAATCG";

// function DNAStrand(dna){
//     return dna.split('').map(v=> {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
// }

// console.log(DNAStrand(dna));

//Задача

// Завершите findNextSquareметод, который находит следующий целочисленный идеальный квадрат после квадрата, переданного в качестве параметра. Напомним, что целочисленный совершенный квадрат — это целое число n, такое что sqrt(n) также является целым числом.

// Если параметр сам по себе не является идеальным квадратом -1, его следует вернуть. Вы можете предположить, что параметр неотрицательный.

// Примеры: (Ввод --> Вывод)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
//Проверить является ли число полным квадратом(Тоесть можно ли из него извлечь корень) 
//если да то вывести корень числа + 1 и возвести это в квадрат иначе -1


// sq = 9;

// function findNextSquare(sq) {
//     return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1)**2 : -1;
// }

// console.log(findNextSquare(sq));


//Задача
// Вы должны написать функцию, printer_errorкоторая по заданной строке будет возвращать частоту ошибок принтера в виде строки , представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длину управляющей строки. Не уменьшайте эту дробь до более простого выражения.

// Строка имеет длину больше или равную единице и содержит только буквы от aдо z.

// Примеры:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"



// var s='aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
// let fails = 0;
// const reg = new RegExp('a-m');
// console.log(reg)

// function printerError(s) {

// Решение номер 1

//     for(let i = 0;i<s.length;i++){
//         let c = s.split('');
//         if(c[i]!=/[a-m]/u){
//             fails += 1;
//         } 
//     }
//     console.log(fails+'/'+s.length);
// }

// Решение номер 2

// s.split('').map((el) =>{
//     if(el>'m'){
//         fails+=1;
//     }
// })
// console.log(fails+'/'+s.length);
// }

// Решение номер 3

//return `${s.replace(/[abcdefghijklm]/g, '').length}/${s.length}`

//console.log(printerError(s));