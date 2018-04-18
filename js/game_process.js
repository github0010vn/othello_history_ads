function takeTurn() {

}

function checkColumn(x, y) {
    if (boardGame[x][y] == 0) return [];
    var i = x + 1;
    var res = [];
    while (boardGame[i][y] != 0 && i < 8 && boardGame[i][y] != boardGame[x][y]) {
        i++;
    }
    if (i < 8 && boardGame[i][y] == 0)
        res.push(new Point(i, y));
    i = x - 1;
    while (boardGame[i][y] != 0 && i >= 0 && boardGame[i][y] != boardGame[x][y]) {
        i--;
    }
    if (i >= 0 && boardGame[i][y] == 0)
        res.push(new Point(i, y));
    return res;
}

function checkRow(x, y) {
    if (boardGame[x][y] == 0) return [];
    var i = y + 1;
    var res = [];
    while (boardGame[x][i] != 0 && i < 8 && boardGame[x][i] != boardGame[x][y]) {
        i++;
    }
    if (i < 8 && boardGame[x][i] == 0)
        res.push(new Point(x, i));
    i = y - 1;
    while (boardGame[x][i] != 0 && i >= 0 && boardGame[x][i] != boardGame[x][y]) {
        i--;
    }
    if (i >= 0 && boardGame[x][i] == 0)
        res.push(new Point(x, i));
    return res;
}

function checkDiag(x, y) {
    if (boardGame[x][y] == 0) return [];
    var i = x + 1, j = y + 1;
    var res = [];
    while (boardGame[i][j] != 0 && i < 8 && j < 8 && boardGame[i][j] != boardGame[x][y]) {
        i++;
        j++;
    }
    if (i < 8 && j < 8 && boardGame[i][j] == 0)
        res.push(new Point(i, j));
    
    
    i = x + 1;
    j = y - 1;
    while (boardGame[i][j] != 0 && i < 8 && j >= 0 && boardGame[i][j] != boardGame[x][y]) {
        i++;
        j--;
    }
    if (i < 8 && j >= 0 && boardGame[i][j] == 0)
        res.push(new Point(i, j));
    
    i = x - 1;
    j = y + 1;
    while (boardGame[i][j] != 0 && i >= 0 && j < 8 && boardGame[i][j] != boardGame[x][y]) {
        i--;
        j++;
    }
    if (i >= 0 && j < 8 && boardGame[i][j] == 0)
        res.push(new Point(i, j));

    i = x - 1;
    j = y - 1;
    while (boardGame[i][j] != 0 && i >= 0 && j >= 0 && boardGame[i][j] != boardGame[x][y]) {
        i--;
        j--;
    }
    if (i >= 0 && j >= 0 && boardGame[i][j] == 0)
    res.push(new Point(i, j));

    return res;
}

function checkPossibleState(point) {
    var x = point.x, y = point.y;
    var res = [];
    res.concat(checkColumn(x, y));
    res.concat(checkRow(x, y));
    res.concat(checkDiag(x, y));
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
            res.concat(temp);
        }
        return res;
    }    
    for (var i = 0; i < diskOfPlayer.length; i++) {
        res.concat(checkPossibleState(diskOfPlayer[i]));
    }
    return res;    
}