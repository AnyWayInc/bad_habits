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

// На этот раз ни истории, ни теории. В приведенных ниже примерах показано, как написать функцию accum:

// Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s) {
//     const result = []
//     const lowerStr = s.toLowerCase()
  
//     for(let i = 0; i < lowerStr.length; i++) {
//       let str = lowerStr[i].toUpperCase()
//       for(let j = 0; j < i; j++) {
//         str += lowerStr[i]
//       }
//       result.push(str)
//     }
  
//     return result.join("-")
// }

// console.log(accum("abcd"));



//Если мы перечислим все натуральные числа ниже 10, которые кратны 3 или 5, мы получим 3, 5, 6 и 9. 
//Сумма этих кратных равна 23. Завершите решение так, чтобы оно вернуло сумму всех кратных 3 или 5 ниже переданного числа.
//Кроме того, если число отрицательное, вернуть 0 (для языков, в которых они есть). 
//Примечание. Если число кратно и 3, и 5, считайте его только один раз.


// function solution(number){
   
//     if (number < 0) {
//         return 0;
//     }

//     let sum = 0;
    
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
    
//     return sum;
// }


// console.log(solution(10));


