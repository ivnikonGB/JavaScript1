function init(){
    var buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length; i++) buttons[i].onclick = buy;
}

function buy(event) {
    var table = document.querySelector(".basket table");
    var tableRow = document.createElement("tr");
    var itemName = document.createElement("td");
    var itemPrice = document.createElement("td");
    var price = event.target.previousElementSibling;
    summ += parseInt(price.innerHTML);
    var name = price.previousElementSibling;
    itemName.innerHTML = name.innerHTML;
    itemPrice.innerHTML = price.innerHTML;
    tableRow.appendChild(itemName);
    tableRow.appendChild(itemPrice);
    table.appendChild(tableRow);
    var summP = document.querySelector(".summ");
    summP.innerHTML = summ;
    console.log(itemPrice);
    console.log(itemName);
}

var summ = 0;

init();