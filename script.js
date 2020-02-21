function createChessBoard() {
    var board = document.createElement("table");
    var tr, td;
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
                    if(j % 2 == 0) td.style.backgroundColor = 0xffffff
                    else td.style.backgroundColor = 0x000000;
                } else {
                    if(j % 2 == 0) td.style.backgroundColor = 0x000000
                    else td.style.backgroundColor = 0xffffff;
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
    
}

createChessBoard();