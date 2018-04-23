function takeTurn() {

}

function checkColumn(x, y) {
    var i = x + 1;
    var res = [];
    if (boardGame[i][y] != 0) {
        while (boardGame[i][y] != 0
            && boardGame[i][y] != boardGame[x][y]
            && boardGame[i][y] != 2 
            && i < 8)
            i++;
        if (i < 8 && boardGame[i][y] == 0) {
            boardGame[i][y] = 2;
            res.push(new Point(i, y));
        }
    }
    
    i = x - 1;
    if (boardGame[i][y] != 0) {
        while (boardGame[i][y] != 0
            && boardGame[i][y] != boardGame[x][y]
            && boardGame[i][y] != 2
            && i >= 0)
            i--;
        if (i >= 0 && boardGame[i][y] == 0) {
            boardGame[i][y] = 2;
            res.push(new Point(i, y));
        }
    }
    
    return res;
}

function checkRow(x, y) {
    var i = y + 1;
    var res = [];

    if (boardGame[x][i] != 0) {
        while (boardGame[x][i] != 0
            && boardGame[x][i] != boardGame[x][y]
            && boardGame[x][i] != 2
            && i < 8) 
            i++
        if (i < 8 && boardGame[x][i] == 0) {
            boardGame[x][i] = 2;
            res.push(new Point(x, i));
        }
    }
    
    i = y - 1;
    if (boardGame[x][i] != 0) {
        while (boardGame[x][i] != 0
            && boardGame[x][i] != boardGame[x][y]
            && boardGame[x][i] != 2
            && i >= 0) 
            i--;
        
        if (i >= 0 && boardGame[x][i] == 0) {
            boardGame[x][i] = 2;
            res.push(new Point(x, i));
        }
    }
    
    return res;
}

function checkDiag(x, y) {
    var i = x + 1, j = y + 1;
    var res = [];
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && i < 8 && j < 8
            && boardGame[i][j] != boardGame[x][y]
            && boardGame[i][j] != 2) {
            i++;
            j++;
        }
        if (i < 8 && j < 8 && boardGame[i][j] == 0) {
            boardGame[i][j] = 2;
            res.push(new Point(i, j));
        }
    } 
    
    i = x + 1;
    j = y - 1;
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && i < 8 && j >= 0
            && boardGame[i][j] != boardGame[x][y]
            && boardGame[i][j] != 2) {
            i++;
            j--;
        }
        if (i < 8 && j >= 0 && boardGame[i][j] == 0) {
            boardGame[i][j] = 2;
            res.push(new Point(i, j));
        }
    }
        
    i = x - 1;
    j = y + 1;
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && i >= 0 && j < 8
            && boardGame[i][j] != boardGame[x][y]
            && boardGame[i][j] != 2) {
            i--;
            j++;
        }
        if (i >= 0 && j < 8 && boardGame[i][j] == 0) {
            boardGame[i][j] = 2;
            res.push(new Point(i, j));
        }
    }
    
    i = x - 1;
    j = y - 1;
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && i >= 0 && j >= 0
            && boardGame[i][j] != boardGame[x][y]
            && boardGame[i][j] != 2) {
            i--;
            j--;
        }
        if (i >= 0 && j >= 0 && boardGame[i][j] == 0) {
            boardGame[i][j] = 2;
            res.push(new Point(i, j));
        }
    }  

    return res;
}

function checkPossibleState(point) {
    var x = point.x, y = point.y;
    var res = [];
    res = res.concat(checkColumn(x, y));
    res = res.concat(checkRow(x, y));
    res = res.concat(checkDiag(x, y));
    return res;
}

function determineNextMove(idPlayer) {
    var player = 1, opponent = 0;
    var res = [];
    var temp = [];
    if (idPlayer === 'BotAI') {
        player = 0;
        opponent = 1;
        for (var i = 0; i < diskOfBot.length; i++) {
            temp = checkPossibleState(diskOfBot[i]);
            res = res.concat(temp);
        }
        return res;
    }    
    for (var i = 0; i < diskOfPlayer.length; i++) {
        res = res.concat(checkPossibleState(diskOfPlayer[i]));
    }
    return res;    
}