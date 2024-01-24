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


// function generateRange(min, max, step){
//     let diaposon=[]
// for ( min; min <= max; min=min+step){
//     diaposon.push(min)
// }
// return diaposon
// }

// function defineSuit(card) {
//     card = card.split("")
//     let mast =card[card.length-1]
//     if (mast==='♣'){return 'clubs'}
//     else if(mast==='♦'){ return 'diamonds'}
//     else if(mast==='♥'){ return 'hearts'}
//     else if(mast==='♠'){ return 'spades'}
//
// }
// console.log(defineSuit("3♥"))

// function calculateTip(amount, rating) {
//     rating = rating.toLowerCase()
//     if (rating === 'terrible') {
//         return amount * 0
//     } else if (rating === 'poor') {
//         return Math.ceil(amount * 0.05)
//     } else if (rating === 'good') {
//         return Math.ceil(amount * 0.1)
//     } else if (rating === 'great') {
//         return Math.ceil(amount * 0.15)
//     } else if (rating === 'excellent') {
//         return Math.ceil(amount * 0.2)
//     }else{
//         return "Rating not recognised"
//     }
// }


// function combat(health, damage) {
//    let newHealth=health - damage;
//    if(newHealth>=0){
//        return newHealth
//    }else {
//        return 0
//    }
// }
//
// console.log(combat(10, 2))




// function sumArray(array) {
//     if (!array || array.length <= 1) {
//         return 0
//     } else {
//         let maxNum = array.reduce(function (a, b) {
//             return a > b ? a : b;
//         })
//         array.splice(array.indexOf(maxNum), 1);
//
//
//         let minNum = array.reduce(function (a, b) {
//             return a < b ? a : b;
//         })
//         array.splice(array.indexOf(minNum), 1);
//         let sum = 0
//         for (let i = 0; i < array.length; i++) {
//             sum = sum + array[i]
//         }
//         return sum
//     }
//
// }

// function combineNames(name, surname) {
//     return name + " " +surname
// }
//
// let name = 'Abe'
//
// const greetAbe = () => 'Hello, ' + name + '!'
// console.log(greetAbe())
// name = 'Ben'
//
// const greetBen = () => 'Hello, ' + name + '!'
// console.log(greetAbe())


// function removeEveryOther(arr){
//     for (let i =1; i<arr.length; i++){
//         arr.splice(i,1)
//     }
//     return arr
// }

// function warnTheSheep(queue) {
//     let wolf = queue.indexOf('wolf')
//
//     if(wolf===queue.length-1){
//                 return  "Pls go away and stop eating my sheep";
//     }else {
//
//             let sheep=queue.length-1-wolf
//             return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
//
//     }
// }

// function swapValues(args) {
//     return args.reverse()
// }

// function well(x){
//      let good=0;
//      for (let i=0; i<x.length; i++){
//          if(x[i]==='good'){
//              good +=1
//          }
//      }
//      if(good===0){
//          return 'Fail!'
//      } else if (good<=2){
//          return 'Publish!'
//      }else{
//          return 'I smell a series!'
//      }
// }

// var findAverage = function (nums) {
//     let sum=0;
//     for (let i=0; i<nums.length; i++){
//         sum=sum+nums[i]
//     }
//     return sum / nums.length
// }