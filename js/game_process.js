
function clickMove(id) {
    insertSprite(id, BOT_AI);
    doReversi(id, BOT_AI);
}
function enableClick(listId) {
    for (var i = 0; i < listId.length; i++) {
        var id = listId[i]
        document.getElementById(id).className = 'selected';
        document.getElementById(id).setAttribute('onclick', 'clickMove(this.id)');
    }
}

function disableClick(listId) {
    for (var i = 0; i < listId.length; i++) {
        var id = listId[i]
        document.getElementById(id).className = 'grid';
        document.getElementById(id).setAttribute('onclick', '');
    }
}


function checkReversiByColumn(x1, x2, y) {
    console.log(x1, x2, y);
    var res = [], sum = 0;
    var numCell = Math.abs(x1 - x2) + 1;
    var min = x1, max = x2;
    if (x1 > x2) {
        min = x2;
        max = x1;
    }
    for (var i = min+ 1; i < max; i++) {
        sum += boardGame[i][y];
        res.push(i.toString() + y);
    }
    console.log(sum, numCell);
    if (numCell - 2 == Math.abs(sum)) return res;
    return [];
}
function checkReversiByRow(y1, y2, x) {
    var res = [], sum = 0;
    var numCell = Math.abs(y1 - y2) + 1;
    var min = y1, max = y2;
    if (y1 > y2) {
        min = y2;
        max = y1;
    }
    for (var i = min + 1; i < max; i++) {
        sum += boardGame[x][i];
        res.push(x.toString() + i);
    }
    if (numCell - 2 == Math.abs(sum)) return res;
    return [];
}
function checkReversiByDiag(x1, y1, x2, y2) {
    var res = [], sum = 0;
    var numCell = Math.abs(y1 - y2) + 1;
    var minx = x1, miny = y1, maxx = x2, maxy = y2;
    if (minx > maxx) {
        minx = x2;
        maxx = x1;
    }
    if (miny > maxy) {
        miny = y2;
        maxy = y1;
    }
    for (var i = minx + 1, j = miny + 1; i < maxx; i++ , j++) {
        sum += boardGame[i][j];
        res.push(i.toString() + j);
    }
    if (numCell - 2 == Math.abs(sum)) return res;
    return [];
}

function checkReversi(id, disks) {
    var res = [];
    var x1 = parseInt(id[0]), y1 = parseInt(id[1]);
    for (var i = 0; i < disks.length; i++) {
        var x2 = parseInt(disks[i][0]), y2 = parseInt(disks[i][1]);
        console.log(x2, y2);
        if (y1 === y2)
            res = merge(res, checkReversiByColumn(x1, x2, y1));
        if (x1 === x2)
            res = merge(res, checkReversiByRow(y1, y2, x1));
        if (x1 - x2 + y1 - y2 == 0)
            res = merge(res, checkReversiByDiag(x1, x2, y1, y2));
    }
    return res;
}

function doReversi(id, disk) {
    var x = parseInt(id[0]), y = parseInt(id[1]);
    var state = boardGame[x][y];
    var listId = checkReversi(id, disk);
    for (var i = 0; i < listId.length; i++) {
        disk.push(listId[i]);
    }
}

