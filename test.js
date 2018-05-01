abc = function (j) {
    if (j == 0) return;
    for (var i = 0; i < 10; i++)
        console.log('abc');
    abc(j - 1);
}

dce = function() {
    console.log('dce');
    console.log('dce');
}

abc(5);
dce();