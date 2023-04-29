/*
Write a JavaScript program to check two numbers and return true if one of the number is
100 or if the sum of the two numbers is 100

 DRY  : dont repeat youtself principle 

*/
// const isEqualTo = function (a, b) {
//     if(a == 100 || b == 100) {
//         return true;
//     }else if(a + b == 100) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(isEqualTo(34,66));
// console.log(isEqualTo(100,66));
// console.log(isEqualTo(34,56));


const addNew = function (str) {
    str.indexOf('New!') === 0 ? : `New! ${str}`;
    console.log(addNew('New! Offers'));