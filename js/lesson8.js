// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.

// 2. Не выполняя кода, ответить, что выведет браузер и почему:

if (!("a" in window)) {    
    var a = 1;
}
alert(a);  // ищет функцию без аргументов, и выводит её: function a() {alert(this);}
    
var b = function a(x) {
    x && a(--x);  // выдаст ошибку
};
alert(a); // как и первый alert ищет функцию без аргументов, и выводит её: function a() {alert(this);}

function a(x) {
    return x * 2;
}
var a;
alert(a);// то же самое: function a() {alert(this);}

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); // выведет 10 

function a() {
    alert(this); // Выводит объект Window
}
a.call(null);