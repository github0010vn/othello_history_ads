var BOT_AI = -1, PLAYER = 1;
var INFINITY = 9999999;
var isOutOfBoard = function (x, y) {
    return (x > 7 || y > 7 || x < 0 || y < 0);
}
function merge(a, b) {
    return a.concat(b.filter(function (item) {
      return a.indexOf(item) == -1;
    }));
}
  
function copyObject(oldObj) {
    

}
var GameModel = function () {
    this.board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.turn = 1;
    this.scores = [0, 0];
    this.countersOf = function (playerType) {
        listCounters = [];
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (this.board[i][j] == playerType)
                    listCounters.push(i.toString() + j);
            }
        }
        return listCounters;
    }
    this.updateScore() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (this.board[i][j] == -1)
                    this.scores[1]++;
                else this.scores[0]++;
            }
        }
    }
    this.checkBoard = function (id, ix, iy) {
        var x = parseInt(id[0]);
        var y = parseInt(id[1]);
        var i = x + ix, j = y + iy;
        res = [];
        if (!isOutOfBoard(i, j) && this.board[i][j] != 0) {
            while (!isOutOfBoard(i, j)
                && this.board[i][j] != this.board[x][y]
                && this.board[i][j] != 0) {
                i += ix;
                j += iy;
            }
            if (!isOutOfBoard(i, j) && this.board[i][j] == 0) {
                res.push(i.toString() + j);
            }
        }        
        return res;
    }
    this.checkLegalMove = function (id) {
        var listLegal = []
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                var newList = this.checkBoard(id, i, j);
                listLegal = merge(listLegal, newList);
            }    
        }
        return listLegal;
    }
    this.hasLegalMoves = function () {
        var listMoves = this.getLegalMoves();
        if (listMoves.length > 0) return true;
        return false;
    }
    this.getLegalMoves = function (playerType) {
        var listMoves = [];
        var listCounter = this.countersOf(playerType)
        for (var i = 0; i < listCounter.length; i++) {
            var temp = this.checkLegalMove(listCounter[i]);
            listMoves = merge(listMoves, temp);
        }
        return listMoves;
    }
    this.letFlip = function (x, y, ix, iy) {
        var i = x + ix, j = y + iy;
        for (; !isOutOfBoard(i, j); i += ix, j += iy) {
            if (this.board[x][y] * this.board[i][j] != -1) break;
        }
        if (i != x + ix || j != y + iy) {
            if (!isOutOfBoard(i, j) && this.board[i][j] != 0) {
                for (var m = x, n = y; m != i || n != j; m += ix, n += iy) {
                    this.board[m][n] = this.board[x][y];
                    if (this.board[x][y] == -1);
                        //this.scores[1]++;
                    //else this.scores[0]++;
                }
            }
        }
    }
    this.flip = function (x, y) {
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                if (i != 0 || j != 0)
                    this.letFlip(x, y, i, j);
            }
        }
    }
    this.placeCounter = function (playerType, _coordiantes) {
        var x = parseInt(_coordiantes[0]), y = parseInt(_coordiantes[1]);
        this.board[x][y] = playerType;
        this.flip(x, y);
        this.updateScore();
        return this;
    }
    this.isTerminal = function () {
        var isExistEmptyPlace = false;
        for (var i = 0; i < this.board.length; i++) {
            if (this.board.includes(0)) {
                isExistEmptyPlace = true;
                break;
            }
        }
        return (!isExistEmptyPlace && this.getLegalMoves().length != 0)
    }
    this.cloneObj = function () {
        newModel = new GameModel();
        newModel.board = JSON.parse(JSON.stringify  (this.board));
        newModel.turn = JSON.parse(JSON.stringify   (this.turn));
        newModel.scores = JSON.parse(JSON.stringify (this.scores));
        return newModel;
    }
}






