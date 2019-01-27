function conversion() {
    console.log([Number("33"),  // 33
        Number("33.33"),        // 33.33
        Number("33skd"),        // NaN

        parseInt("33"),         // 33
        parseInt("33.33"),      // 33
        parseInt("33sdk"),      // 33
        parseInt("ff", "16"),   // 255

        parseFloat("33"),       // 33
        parseFloat("33.33"),    // 33.33
        parseFloat("33.33abc")  // 33.33
    ]);
}

describe("test case", function () {
    it("test 1", function () {
        var b = {fst: 1, snd: 2}
        conversion();
    });
});
