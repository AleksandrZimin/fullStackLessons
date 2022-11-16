// for(var i = 1; i < 20; i++) {
//    if(i > 15)
//     break; 
//    if(i % 2 != 0) 
//     continue;

//     console.log(i);
// }

// var hasCar = true;
// while(hasCar) {
//    console.log("Yes");
//    if(!hasCar)
    //  break                   Бесконечный цикл 
// }

// var i = 100;
// do {
//    console.log(i);
//    i++;
// }while(i < 10);

var arr2 = [5, 6, "Hello", 's', true, 9];

// for(var i =0; i < arr2.length; i++) {
//     console.log("Элемент под номером №" + (i + 1) + ": " + arr2[i]);
// }

arr2.forEach(function(item, i, array2){
    console.log("Элемент под номером №" + i + ": " + item + ".Массив: " + array2);
});

for(var key in arr2) {
    console.log("Элемент под номером №" + key + ": " + arr2[key]);
}