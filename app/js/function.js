var i = 0;

function show() {
   var el = "Element"

   console.log(i);
}

function print () {
   var el = "Element";
   console.log(i);
}

show();
print();
console.log(i);

function calc(a = 12, b = 10){
   // if(b == undefined)
   // b = 10;
   var res = a + b; 
   console.log(res);
}

// let func = calc;
// func(5, 10);
// func = null;

let func = function(mess = "Bob") {
   console.log("Привет: " + mess);
}

func();
func("Alex");

calc(56);
calc(56, 14);

function multiply(a, b, c) {
   var res = a * b * c;
   return res;
}

var mult = multiply(5, 2, 2);
console.log(mult);





function arrayEven(array3) {
   let isEven = true;
   array3.forEach(function(item, i, arr3){
      if(item % 2 != 0 ) {
         isEven = false;
      }
   });
   return isEven;
}

let arr3 = [5, 9, 0, 4];
let arr4 = [6, 8, 0, 4];
let isEven = arrayEven(arr3);
console.log(isEven);

function test(words) {
   console.log(words);
}

setTimeout(test, 1500, "Hello world");

setTimeout("console.log('Privet')", 2500);

setTimeout(function(){
   console.log('Mir');
}, 3500);

let timeOut = setTimeout(function(){
   console.log('noTimeOut');
}, 3500);

clearTimeout(timeOut);

let interval = setInterval(function(){
   console.log('Inteval');
}, 5500);

setTimeout(function(){
   clearInterval(interval);
   console.log('Stop');
}, 18000);


// var numbers = 45;


// alert("Hello all " + numbers);

// let getUserInfo = prompt("Сколько вам лет?", 18);
// alert("Var " + getUserInfo);

// let isConfirm = confirm("Согласны ли вы на обработку данных?");
// alert(isConfirm);




// Функции для работы с массивами

let arr10 = ["BMW", "Mercedes", "Audi", "Volvo"];

// arr10.forEach(function(item, i, arr10) {
//    console.log("Index: " + i + ": " + item + ". Массив: " + arr10);
// });

// let newArr = arr10.filter(function(el11) {
//    return el11.length == 3 || el11.length == 4;
// });

// console.log(newArr);


// let arr11 = [1, -1, 2, 3, -3];
// var positive = arr11.filter(function(el12) {
//    return el12 > 0;
// })

// console.log(positive);

let newArr = arr10.map(function(el13) {
   return el13.toLowerCase();
});
console.log(newArr);

// every some 

function elLength(el15) {
   return el15.length == 3;
}

console.log(arr10.every(elLength));
console.log(arr10.some(elLength));

let nums = [1, 2, 3, 4, 5, 6];

let summa = nums.reduce(function(sum, el) {
   return sum + el;
});
console.log(summa);

let currency = [23.5, 4.56, 33.5];
let average = currency.reduce(function(total, el, index, array) {
   total += el;
   if(index === array.length - 1)
   return total / array.length;
   else
   return total;
})
console.log(average);

// reduceRight - в обратном порядке перебирается массив if(index === 0)