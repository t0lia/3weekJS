// {} - object literal
// typeof
// delete
var MYAPP = {};

MYAPP.objects = function () {

    var Man = {
        name: "Alex",
        age: 25
    };

    console.log(Man.name);
};

// constructor like
function counter(initial) {
    // private field
    var c = initial;

    // method
    function inc() {
        c += 1;
    }

    function add(i) {
        c += i;
    }

    function get() {
        return c;
    }

    function seven() {
        return this.value;
    }

    // public methods
    return {value: 777, seven: seven, inc: inc, get: get, add: add};
}

describe("test case", function () {
    it("test 1", function () {
        MYAPP.objects();
    });
    it("test 2", function () {
        var cnt = counter(3);
        cnt.inc();
        cnt.inc();
        cnt.add(2);
        console.log(cnt.get());
        console.log(cnt.seven());
    });
});
