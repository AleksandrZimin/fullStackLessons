let obj = '{"name": "Alex", "age": 45, "hasCar": true}';

obj = JSON.parse(obj); // Из JSON в объект

console.log(obj);

let array5 = '[56, 7, 2, 89]';

array5 = JSON.parse(array5);

console.log(array5);

let obj2 = '{"name": "Goga", "state": "USA", "male": true, "friends": [0,1,2,3] }';

obj2 = JSON.parse(obj2);

console.log(obj2);
console.log(obj2.friends[2]);

// из объекта в JSON

var obj3 = {
   name: "Dima",
   age: 30,
   state: "USA"
};

let str3 = JSON.stringify(obj3, "", 4);

console.log(str3);

// коллекции set & map
//set
let mySet = new Set();
mySet.add(5);
mySet.add(3.6);
mySet.add("5");
mySet.add({"name": "Alex"});
mySet.add(54);
mySet.add(true);
mySet.add(5);

mySet.delete(5)

console.log(mySet.has(5));

for(let el of mySet)
console.log(el);

//map

let map = new Map();
map.set("first", "srt1");
map.set(2, "srt2");
map.set(true, "srt3");
map.set({"name": "Alex"}, "srt4");

// map.delete(2);
// console.log(map.has(2));
// console.log(map);
// console.log(map.size);

for(let el4 of map.keys())   // [1]
console.log(el4);

for(let el5 of map.values()) // [2]
console.log(el5);

for(let el6 of map)
console.log(el6);