let array = [45, true, 6.92, "Hello", 'R'];

array[1] = false;
array[2] = false;
array[3] += " World";
array[10] = false;


array.pop(); // Удаляет последний элемент 
array.push("Bob", "Alex", 1); // Добавляет эл-ты в конец
array.shift(); // Удаляет первый эл-т из массива
array.unshift("Bob", "Alex", 1); // Добавляет в начало массива

delete array [4];

array.length = 20; // Длина массива 

console.log(array[4]);

console.log(array);

let arr = new Array();
console.log(arr);

//Двух мерный массив

let matrix = [
  [56, "Hello"],
  [5], 
  [8.9, true, false, 56],
];
console.log(matrix);

matrix[2][1] = "World";
console.log(matrix);

let array_firsr = [45, "Hello", true, "Bue", false];
let one = array_firsr.join(",") // Из массива делает строку 
console.log(one);

let str = "Hello, world, 5m 0, qwe, 67, gff";
let array_split = str.split(", "); // Из строки делаеи массив по разделению по символам
console.log(array_split);
array_split.splice(1, 2); //Удаление диапазона массива
console.log(array_split);