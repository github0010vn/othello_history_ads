var a = function (i) {
    this.data = i;
}

var b = []
for (var i = 0; i < 10; i++) {
    b.push(new a(i));
}
e = b[3];
e.data = 5;




b.splice(3, 1);
b.unshift(e);

console.log('chi so');
console.log(b.indexOf(0));
console.log('dc tim thay');

for (var i = 0; i < 10; i++) {
    console.log(b[i].data);
}

console.log(b.indexOf(e));