function createChessBoard() {
    var board = document.createElement("table");
    var tr, td, button;
    var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H"];
    document.body.append(board);
    board.border = 1;
    board.style.borderSpacing = "0";
    board.style.textAlign = "center";
    for(var i=0;i<10;i++) {
        tr = document.createElement("tr");
        for(var j=0;j<10;j++) {
            td = document.createElement("td");
            td.style.width = 50;
            td.style.height = 50;
            if(i != 0 && i != 9 && j != 0 && j != 9) {
                if(i % 2 == 0) {
                    if(j % 2 == 0){
                        td.style.backgroundColor = "#cccccc";
                    } else {
                        td.style.backgroundColor = "#333333";
                    }
                } else {
                    if(j % 2 == 0) {
                        td.style.backgroundColor = "#333333";
                    } 
                    else {
                        td.style.backgroundColor = "#cccccc";
                    }
                }
            } else {
                td.style.borderStyle = "none";
                if(i == 0 && j != 0 && j != 9) {
                    td.innerText = letters[j];
                    td.style.transform = "rotate(180deg)";
                } else if(i == 9 && j != 0 && j != 9) {
                    td.innerText = letters[j];
                } else if(j == 0 && i != 0 && i != 9) {
                    td.innerText = 9 - i;
                } else if(j == 9 && i != 0 && i != 9) {
                    td.innerText = 9 - i;
                    td.style.transform = "rotate(180deg)";
                }
            }
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
    button = document.createElement("button");
    button.onclick = putLetterFigures;
    button.innerText = "Добавить фигуры на доску";
    button.style.margin = "50px 180px";
    document.body.append(button);
}

function putFigures(figures) {
    var tr = document.querySelectorAll("tr");
    var figuresBlack = tr[1].querySelectorAll("td");
    var pawnsBlack = tr[2].querySelectorAll("td");
    var figuresWhite = tr[8].querySelectorAll("td");
    var pawnsWhite = tr[7].querySelectorAll("td");
    
    for(var i=0;i<8;i++) {
        figuresBlack[i+1].innerHTML = figures[i];
        figuresBlack[i+1].style.color = "#000000";
        figuresBlack[i+1].style.fontSize = "30px";
        pawnsBlack[i+1].innerHTML = figures[8];
        pawnsBlack[i+1].style.color = "#000000";
        pawnsBlack[i+1].style.fontSize = "30px";
        figuresWhite[i+1].innerHTML = figures[i];
        figuresWhite[i+1].style.color = "#ffffff";
        figuresWhite[i+1].style.fontSize = "30px";
        pawnsWhite[i+1].innerHTML = figures[8];
        pawnsWhite[i+1].style.color = "#ffffff";
        pawnsWhite[i+1].style.fontSize = "30px";
    }
    return;
}

function putLetterFigures() {
    var letterFigures = ["R", "N", "B", "Q", "K", "B", "N", "R", "P"];
    var button = document.querySelector("button");
    button.innerText = "Поменять буквы на изображения";
    button.onclick = putRealFigures;
    putFigures(letterFigures);
    return;
}

function putRealFigures() {
    var figures = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;", "&#9817;"];
    var button = document.querySelector("button");
    button.onclick = putLetterFigures;
    button.innerText = "Добавить фигуры на доску";
    putFigures(figures);
    return;
}



createChessBoard();