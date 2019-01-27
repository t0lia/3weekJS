// template method call
// template function call
// template constructor call




// variable, anonimous function
var add0 = function (a, b) {
    return a + b;
};

// function declaration
function add2 (a, b) {
    return a + b;
}

// variable, declaration function
var add3 = function add4(a, b) {
    return a + b;
};

describe("test case", function () {
    it("test 1", function () {
        console.log(add0(1, 1));
        console.log(add2(2, 1));
        console.log(add2(3, 1));
        console.log(add2(4, 1));
    });
});
