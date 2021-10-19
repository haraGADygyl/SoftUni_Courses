let {expect} = require('chai');
let testNumbers = require('../mochaTests');

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('works with two numbers', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
            expect(testNumbers.sumNumbers(1.5, 2.5)).to.equal('4.00');
        });

        it('does not work with invalid numbers', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('a', 'b')).to.equal(undefined);
            expect(testNumbers.sumNumbers(undefined, undefined)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers([], [])).to.equal(undefined);
            expect(testNumbers.sumNumbers({}, {})).to.equal(undefined);
            expect(testNumbers.sumNumbers('', '')).to.equal(undefined);
        });
    });

    describe('numberChecker', () => {
        it('works with even numbers', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });

        it('works with odd numbers', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });

        it('does not works with invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(NaN)).to.throw('The input is not a number!');
        });
    });

    describe('averageSumArray', () => {
        it('works with valid array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
            expect(testNumbers.averageSumArray([-1, -2, -3])).to.equal(-2);
        });
    });
})