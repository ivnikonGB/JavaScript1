function numberToObject(number) {
    var obj = null;
    if(number < 0 || number > 999) {
        console.log("Number must be from 0 to 999!!!");
        return obj;
    }

    obj.единицы = number % 10;
    obj.десятки = Math.floor(number % 100 / 10);
    obj.сотни = Math.floor(number / 100); 
    return obj;
}

