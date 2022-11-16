function clickHref() {
   alert('Hi bitchs');
   document.querySelector("a.href").style.display = "none";
}

function clickText(selector) {
   document.querySelector(selector).style.backgroundColor = "#333";
   document.querySelector(selector).style.color = "#fff";
}

function dblclick(selector) {
   document.querySelector(selector).style.color = "red";
}

let input = document.querySelector(".in");

function focusEvent() {
   input.style.backgroundColor = "#333";
   input.style.padding = "10px";
   input.style.color = "#fff";
}

function focusEndEvent() {
   input.style.backgroundColor = "#fff";
   input.style.border = "1px solid black";
   input.style.padding = "2px";
   input.style.color = "#111";
}

window.onclick = function() {
  console.log("Click")
};

input.onmouseover = function() {
   console.log("onmouseover")
};

window.onresize = function() {
   console.log("size")
}

window.onload = function() {
   console.log("load")
};

window.onscroll = function() {
   console.log("scroll")
};

let textarea = document.querySelector("#textarea");

textarea.oninput = function() {
   console.log("oninput")
};

//Ожидающие события


let btnArr = document.querySelector(".button-aria");

// function handler() {
//    btnArr.innerHTML = "Отправка.. ."
// }

// btnArr.addEventListener("click", handler);


function handlerOver() {
   btnArr.innerHTML = "Отправка.. ."
};

function handlerOut() {
   btnArr.innerHTML = "Отправить"
};

btnArr.addEventListener("mouseover", handlerOver);
btnArr.addEventListener("mouseout", handlerOut);

btnArr.removeEventListener("mouseout", handlerOut);

//Новый урок события при мыши или клавиатуре

let txtArria = document.querySelector("#txt_aria");

txtArria.onkeydown = function(e) {
   console.log("onkeydown" + txtArria.value)
};

txtArria.onkeypress = function(e) {
   console.log("onkeypress" + txtArria.value)
};

txtArria.onkeyup = function(e) {
   console.log("onkeyup" + txtArria.value)
};

let boldText = document.querySelectorAll('p > b.bold-txt');
// boldText.onclick = function() {
//    boldText.style.color = "red";
// };
// boldText.ondblclick = function() {
//    boldText.style.color = "green";
// };

// boldText.forEach((item, i) => {

// })

boldText.forEach(function(el) {
   el.onmousedown = function() {
      el.style.color = "red";
   };
   
   el.onmouseup = function() {
      el.style.color = "blue";
   };
   
   // el.oncontextmenu = function() {
   //    el.style.color = "green";
   // };
});

// for(var i = 0; i < boldText.length; i++)
// console.log(boldText[i]);



// let boldText = document.querySelector(".bolt_txt");

// function inputField()

let inputttField = document.querySelector('#inputtt');
let helpppField = document.querySelector('#hinttt');

inputttField.onmouseenter = function() {
   helpppField.style.display = "block";
};

inputttField.onmousemove = function(e) {
   helpppField.style.left = e.offsetX + 'px';
   helpppField.style.top = e.offsetY + 'px';
};

inputttField.onmouseleave = function() {
   helpppField.style.display = "none";
};

// сенсорный телефон

let tap = document.getElementById("tap");

window.addEventListener('touchstart', function(e) {
   tap.style.background = "red";
});

window.addEventListener('touchmove', function(e) {
   tap.style.left = e.targetTouches[0].pageX + "px";
   tap.style.top = e.targetTouches[0].pageY + "px";

});

window.addEventListener('touchend', function(e) {
   tap.style.background = "#333";
});


// ассинхронное программирование

let load = function(url, callback) {
   let ajax = new XMLHttpRequest();
   ajax.open('GET', url);
   ajax.onload = function() {
      callback(this.responseText);
   };
   ajax.send();
};

load('text.txt', function(data) {
   console.log(data);
});