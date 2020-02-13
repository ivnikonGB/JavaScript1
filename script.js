// Задание 1
var i = 0, j, simple = true;

while(i <= 100) {
    j = 2;
    while(j < i) {
        simple = true;
        if(i % j == 0) {
            simple = false;
            break;
        }
        j++;
    }
    if(simple) {
        document.write(i + ", ");
    }
    i++;
}

document.write("<hr>");

// Задание 2, 3
var cart = [];

for(var i=0; i<10; i++) {
    cart[i] = Math.round(Math.random() * 1000);
    document.write(cart[i] + " ");
}

function countBasketPrice(cart) {
    var summ = 0;
    for(var price of cart) {
        summ += price;
    }
    return summ;
}

alert(countBasketPrice(cart));

// Задание 4
for(var i=0; i<10;console.log(i), i++);

// Задание 5
var str;
for(var i=1; i<=20; i++) {
    str="";
    for(var j=1; j<=i; j++) str += "*";
    console.log(str);
}