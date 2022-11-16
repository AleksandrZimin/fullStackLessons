let car = {
   marka: "Volvo",
   color: "Wighte",
   type: "sedan",
   speed: 250,
   fuel: 50,
   isNew: true,
   passengers: ["Alex", "Bob", "John"]
};

console.log(car.type);
console.log(car["isNew"]);

for(let key in car) {
   console.log("Элемент по ключу " + key + ": " + car[key]);
}

//class

// function Car (marka, color, type, speed){
//    this.marka = marka;
//    this.color = color;
//    this.type = type;
//    this.speed = speed;
// }

class Car {
   constructor(marka, color, type, speed) {
      this.marka = marka;
      this.color = color;
      this.type = type;
      this.speed = speed; 
   }

   info() {
      console.log("Марка: " + this.marka + ", " + "Цвет: " + this.color + ", " + "Тип: " + this.type + ", " + "Скорость: " + this.speed);
   }
}

let bmw = new Car ("M3", "Blue", "Sedan", 270);

bmw.info();