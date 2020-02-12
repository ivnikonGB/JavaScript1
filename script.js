// Пункт 2 домашнего задания
var a = 2;
var x = 1 + (a *= 2);

// Пункт 3 домашнего задания
var b;
a = Math.floor(Math.random() * 100 - 50);
b = Math.floor(Math.random() * 100 - 50);

if(a >= 0 && b >= 0)
    alert(a - b);
else if(a < 0 && b < 0)
    alert(a * b);
else
    alert(a + b);

// Пункт 4 домашнего задания
a = Math.floor(Math.random() * 15);
switch(a) {
    case 1: document.write(1 + "<br>");
    case 2: document.write(2 + "<br>");
    case 3: document.write(3 + "<br>");
    case 4: document.write(4 + "<br>");
    case 5: document.write(5 + "<br>");
    case 6: document.write(6 + "<br>");
    case 7: document.write(7 + "<br>");
    case 8: document.write(8 + "<br>");
    case 9: document.write(9 + "<br>");
    case 10: document.write(10 + "<br>");
    case 11: document.write(11 + "<br>");
    case 12: document.write(12 + "<br>");
    case 13: document.write(13 + "<br>");
    case 14: document.write(14 + "<br>");
    case 15: document.write(15 + "<br>");
}

// Пункт 5 домашнего задания
function summ(a, b) {
    return a + b;
}

function dif(a, b) {
    return a - b;
}

function mul(a ,b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

// Пункт 6 домашнего задания
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return summ(arg1, arg2);
        case "-":
            return dif(arg1, arg2);
        case "*":
            return mul(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            alert("Wrong operation!!!");
            return;
    }
}

// Пункт 7 домашнего задания
if(null < 0) alert("null < 0");
if(null > 0) alert("null > 0");
if(null <= 0) alert("null <= 0");
if(null >= 0) alert("null >= 0");
if(null == 0) alert("null = 0");
if(null != 0) alert("null != 0");

// Пункт 8 домашнего задания
function power(val, pow) {
    if(pow == 0) return 1;
    return val * power(val, pow-1);
}

