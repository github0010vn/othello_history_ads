function takeTurn() {

}

function checkColumn(id) {
    var x = parseInt(id[0]);
    var y = parseInt(id[1]);
    var i = x + 1;
    var res = [];
    if (boardGame[i][y] != 0) {
        while (boardGame[i][y] != 0
            && boardGame[i][y] != boardGame[x][y]
            && i < 8)
            i++;
        if (i < 8 && boardGame[i][y] == 0) {
            res.push(i.toString() + y);
        }
    }
    
    i = x - 1;
    if (boardGame[i][y] != 0) {
        while (boardGame[i][y] != 0
            && boardGame[i][y] != boardGame[x][y]
            && i >= 0)
            i--;
        if (i >= 0 && boardGame[i][y] == 0) {
            res.push(i.toString() + y);
        }
    }
    
    return res;
}

function checkRow(id) {
    var x = parseInt(id[0]);
    var y = parseInt(id[1]);
    var i = y + 1;
    var res = [];

    if (boardGame[x][i] != 0) {
        while (boardGame[x][i] != 0
            && boardGame[x][i] != boardGame[x][y]
            && i < 8) 
            i++
        if (i < 8 && boardGame[x][i] == 0) {
            res.push(x.toString() + i);
        }
    }
    
    i = y - 1;
    if (boardGame[x][i] != 0) {
        while (boardGame[x][i] != 0
            && boardGame[x][i] != boardGame[x][y]
            && i >= 0) 
            i--;
        
        if (i >= 0 && boardGame[x][i] == 0) {
            res.push(x.toString() + i);
        }
    }
    
    return res;
}

function checkDiag(id) {
    var x = parseInt(id[0]);
    var y = parseInt(id[1]);
    var i = x + 1, j = y + 1;
    var res = [];
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && boardGame[i][j] != boardGame[x][y]
            && i < 8 && j < 8) {
            i++;
            j++;
        }
        if (i < 8 && j < 8 && boardGame[i][j] == 0) {
            res.push(i.toString() + j);
        }
    } 
    
    i = x + 1;
    j = y - 1;
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && boardGame[i][j] != boardGame[x][y]
            && i < 8 && j >= 0) {
            i++;
            j--;
        }
        if (i < 8 && j >= 0 && boardGame[i][j] == 0) {
            res.push(i.toString() + j);
        }
    }
        
    i = x - 1;
    j = y + 1;
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && boardGame[i][j] != boardGame[x][y]
            && i >= 0 && j < 8) {
            i--;
            j++;
        }
        if (i >= 0 && j < 8 && boardGame[i][j] == 0) {
            res.push(i.toString() + j);
        }
    }
    
    i = x - 1;
    j = y - 1;
    if (boardGame[i][j] != 0) {
        while (boardGame[i][j] != 0
            && boardGame[i][j] != boardGame[x][y]
            && i >= 0 && j >= 0) {
            i--;
            j--;
        }
        if (i >= 0 && j >= 0 && boardGame[i][j] == 0) {
            res.push(i.toString() + j);
        }
    }  

    return res;
}

function checkPossibleState(id) {
    var res = [];
    res = merge(res, checkColumn(id));
    res = merge(res, checkRow(id));
    res = merge(res, checkDiag(id));
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
            res = merge(res, temp);;
        }
        return res;
    }    
    for (var i = 0; i < diskOfPlayer.length; i++) {
        res = merge(res, checkPossibleState(diskOfPlayer[i]));
    }
    return res;    
}