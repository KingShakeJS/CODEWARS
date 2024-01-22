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

function basicOp(operation, value1, value2){
if(operation==="-"){
    return value1 - value2;
}
else if (operation==="+"){
    return value1 + value2;
}
else if (operation==="/"){
    return value1 / value2;
}
else if (operation==="*"){
    return value1 * value2;
}


}


