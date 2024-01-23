// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
//
// function makeNegative(num) {
//     if (num > 0) {
//         return -num
//     } else if (num < 0) {
//         return num
//     } else {
//         return 0
//     }
// }

// function basicOp(operation, value1, value2){
// if(operation==="-"){
//     return value1 - value2;
// }
// else if (operation==="+"){
//     return value1 + value2;
// }
// else if (operation==="/"){
//     return value1 / value2;
// }
// else if (operation==="*"){
//     return value1 * value2;
// }
//
//
// }


// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; z.length<n; i++) {
//         if (i % x === 0) {
//             z.push(i)
//         }
//     }
//     return z;
// }


// websites.push("codewars")


// let x = [9, 3, 4, "1", "9"]
//
// function sumMix(x) {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//
//         sum = sum + Number(x[i])
//     }
//
//     return sum;
// }

// function repeatStr (n, s) {
//     let str;
//     for (let i=0; i<n; i++ ){
//         if(str===undefined){
//             str=s
//         }else{
//             str=str+s
//         }
//
//     }
//     return str;
// }


// function getSize(width, height, depth){
//     let volume = width * height * depth;
//     let area = 2*(width * height + height * depth + width * depth);
//     return[area, volume]
// }


// function getAverage(marks){
//     let sum=0;
//     for (let i =0; i<marks.length; i++){
//         sum = sum + marks[i]
//     }
//     return Math.floor(sum / marks.length)
// }


// function divisibleBy(numbers, divisor) {
//     let a=[]
//     for (let i = 0; i < numbers.length; i++) {
//         if ((numbers[i] % divisor) ===0) {
//              a.push(numbers[i])
//         }else{
//             continue;
//         }
//     }
//          return a
// }

// function correct(string) {
//     string = string.split("")
//     for (let i = 0; i < string.length; i++){
//         if(string[i]==="5"){
//             string[i]='S'
//         } else if(string[i]==="0"){
//             string[i]='O'
//         }else if(string[i]==="1"){
//             string[i]='I'
//         }
//     }
//     return string.join("")
// }

// function getDrinkByProfession(param) {
//     param = param.toLowerCase()
//     if (param === "jabroni") {
//         return "Patron Tequila"
//     } else if (param === "school counselor") {
//         return "Anything with Alcohol"
//     }else if (param === "programmer") {
//         return "Hipster Craft Beer"
//     }else if (param === "bike gang member") {
//         return "Moonshine"
//     }else if (param === "politician") {
//         return "Your tax dollars"
//     }else if (param === "rapper") {
//         return "Cristal"
//     }else{
//         return "Beer"
//     }
// }

// var cubeChecker = function (volume, side) {
//     if ((volume === side ** 3) && (volume > 0) && (side > 0)) {
//         return true
//     } else {
//         return false
//     }
// };