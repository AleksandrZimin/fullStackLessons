// console.log(window.innerWidth);
// console.log(window.innerHeight);

// window.open("https://web-lab.pw", "hello", "width=500", "height=500");

// console.log(navigator.userAgent);
// console.log(navigator.platform);

// console.log(location.href);

// setTimeout(function() {
//    location.reload();
// }, 5000);

// location.href = "https://web-lab.pw";

// console.log(document.documentElement);
// console.log(document.document.body);
// console.log(document.document.head);

// console.log(document.body.childNodes);

// for(var i = 0; i < document.body.childNodes.length; i++){
//    console.log(document.body.childNodes[i]);
// }

// let content_id = document.getElementById("content_id") // поиск по id

// let elements = content_id.getElementsByTagName("*")[0]; // по тегу
// console.log(elements);

// for (var i = 0; i < elements.length; i++) {
//    console.log(elements[i]);
// }

// let el = document.getElementsByName("fname")[0].tagName; // по значению атрибута
// console.log(el);

// let allClasses = document.getElementsByClassName("some")[1]; // по классу
// console.log(allClasses);

// let elements = document.querySelectorAll("ul.menu__item > li");
// console.log(elements);

//querySelector - только один

// let ulItems = document.querySelector("#span-text");
let ulItems = document.querySelectorAll(".span-text")[0];

console.log(ulItems.closest("li").className); // ближайший родительский элемент

// работа с контентом

let parentLi = ulItems.closest(".menu__li");

parentLi.innerHTML = "Новое значение"; // заменяем HTML

console.log(parentLi.innerHTML);

let input = document.querySelector("input[type]");
if(input != null){
input.value = "Что-то новое";

input.setAttribute("data-toggle", "some value");
input.setAttribute("type", "text"); // Добавляем или изменяем атрибуты

if(input.hasAttribute("type"))
   alert(input.getAttribute("class"));

   input.removeAttribute("name"); // Удаляем атрибуты

   input.className = "some new test";
   alert(input.className);
}


// let h1 = document.querySelector("h1");
// h1.innerHTML = "JS заголовок";

// работа с атрибутами

// if(input.hasAttribute("type"))
//    alert("Yes, he is");
// else
//    alert("No");

//document.write("123")// вставляем текст в html 


input.style.backgroundColor = "#555"; // Добавляем стили к тегам
input.style.border = "1px solid silver";
input.style.borderRadius = "12px";
input.style.padding = "10px";
