var player = function(type, list_counter) {
    this.type = type;
    this.list_counter = list_counter;
    this.hello = function() {
        console.log('hello');
    };
};

var human = function (type, list_counter) {
    player.apply(this, [type, list_counter]);
    this.other = function() {
        console.log('other');
    };
};
var h = new human(1, 2);
h.hello();
console.log(h.type);
console.log(h.list_counter);

var abc = function (a) {
    this.b = a; 
    this.hello = function () {
        console.log(this.b);
        console.log(this.b);
    }
}

var abc = new abc(12);
abc.hello();