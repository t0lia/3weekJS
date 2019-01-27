"use strict";
/* global describe, it */
var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;

var HRNK = {};
/**
 * Simple Array Sum
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 */
HRNK.simpleArraySum = function (arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
};

/**
 * Diagonal difference
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 * @returns {string}
 */
HRNK.diagonalDifference = function (arr) {
    var result = 0;
    var i;
    for (i = 0; i < arr.length; i += 1) {
        result += arr[i][i];
        result -= arr[i][arr.length - 1 - i];
    }
    return result > 0 ? result : -result;

};


/**
 * Compare the Triplets
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */
// Complete the compareTriplets function below.
HRNK.compareTriplets = function (a, b) {
    var i = 0;
    var aRes = 0;
    var bRes = 0;

    function process() {
        if (a[i] > b[i]) {
            aRes += 1;
            return;
        }
        if (b[i] > a[i]) {
            bRes += 1;
        }
    }

    for (i = 0; i < 3; i += 1) {
        process();
    }
    return [aRes, bRes];
};

describe("hacker rank algorithms tests", function () {
    it("simple array sum", function () {
        assert.strictEqual(HRNK.simpleArraySum([1, 2, 3]), 6);
    });

    it("diagonal difference", function () {
        assert.strictEqual(HRNK.diagonalDifference([[1, 2], [3, 4]]), 0);
        assert.strictEqual(HRNK.diagonalDifference([[1, 1], [3, 2]]), 1);
    });

    it("compare the triplets", function () {
        expect(HRNK.compareTriplets([1, 2, 3], [4, 5, 6])).to.eql([0, 3]);
        expect(HRNK.compareTriplets([1, 3, 1], [3, 1, 3])).to.eql([1, 2]);
        expect(HRNK.compareTriplets([1, 2, 3], [1, 2, 3])).to.eql([0, 0]);
    });
});
