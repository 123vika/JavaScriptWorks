var chessTable = document.createElement("table");
var whiteKing = "\u2654";
var whiteQueen = "\u2655";
var whiteRook = "\u2656";
var whiteBishop = "\u2657";
var whiteKnight = "\u2658";
var whitePawn = "\u2659";

var blackKing = "\u265A";
var blackQueen = "\u265B";
var blackRook = "\u265C";
var blackBishop = "\u265D";
var blackKnight = "\u265E";
var blackPawn = "\u265F";

for (var i = 0; i < 10; i++) {
    var tr = document.createElement("tr");
    chessTable.append(tr);

    for (var j = 0; j < 10; j++) {
        var td = document.createElement("td");
        if(j == 9){
            td.classList = "rotate";
        }
        if(i == 0){
            td.classList = "rotate";
        }
        if (j == 0 || j == 9) {
            getColor ();
            switch (i) {
                case 1:
                    td.innerText = 8 ;
                    break;
                case 2:
                    td.innerText = 7;
                    break;
                case 3:
                    td.innerText = 6;
                    break;
                case 4:
                    td.innerText = 5;
                    break;
                case 5:
                    td.innerText = 4;
                    break;
                case 6:
                    td.innerText = 3;
                    break;
                case 7:
                    td.innerText = 2;
                    break;
                case 8:
                    td.innerText = 1;
                    break;
            }
        } else if (i == 0 || i == 9) {
            switch (j) {
                case 1:
                    td.innerText = "A";
                    break;
                case 2:
                    td.innerText = "B";
                    break;
                case 3:
                    td.innerText = "C";
                    break;
                case 4:
                    td.innerText = "D";
                    break;
                case 5:
                    td.innerText = "E";
                    break;
                case 6:
                    td.innerText = "F";
                    break;
                case 7:
                    td.innerText = "G";
                    break;
                case 8:
                    td.innerText = "H";
                    break;
            }
        }
        if (((i + j) % 2 != 0) &&  i != 0 &&  i != 9 &&  j != 0 &&  j != 9 ){
            td.style.backgroundColor =  "#7c4f24";
        }else{
            td.style.backgroundColor =  "#e8bc94";
        }
            
        if (i == 2 && j > 0 && j < 9) {
            td.innerText = blackPawn;

        } else if (i == 7 && j > 0 && j < 9) {
            td.innerText = whitePawn;
        }

        if(j == 4 && i == 8){
            td.innerText = whiteQueen;
        }
        if(j == 5 && i == 8){
            td.innerText = whiteKing;
        }
        if((j == 1 || j == 8) && i == 8){
            td.innerText = whiteRook;
        }
        if((j == 2 || j == 7) && i == 8){
            td.innerText = whiteKnight;
        }
        if((j == 3 || j == 6) && i == 8){
            td.innerText = whiteBishop;
        }

        if(j == 4 && i == 1){
            td.innerText = blackQueen;
        }
        if(j == 5 && i == 1){
            td.innerText = blackKing;
        }
        if((j == 1 || j == 8) && i == 1){
            td.innerText = blackRook;
        }
        if((j == 2 || j == 7) && i == 1){
            td.innerText = blackKnight;
        }
        if((j == 3 || j == 6) && i == 1){
            td.innerText = blackBishop;
        }

        tr.append(td);
        td.style.border = "0.2px solid #7c4f24";
        td.style.textAlign = "center";
    }
}

document.querySelector("div").append(chessTable);
chessTable.style.border = "1px solid black";
chessTable.style.width = "600px";
chessTable.style.height = "600px";
chessTable.style.margin = "0 auto";
//rotate top letters and right numbers, color black and white for table, 
//put  chessmen in their place//

function getColor(){
    td.style.backgroundColor =  "#e8bc94";
}