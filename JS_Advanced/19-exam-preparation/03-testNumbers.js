let {expect} = require('chai');
let testNumbers = require('../mochaTests');

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('work with two numbers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1.1, 1.1)).to.equal('2.20');
            expect(testNumbers.sumNumbers(-2, 1)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });

        it('does not work with invalid numbers', () => {
            expect(testNumbers.sumNumbers('1', 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers([], 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, [])).to.equal(undefined);
        })
    });

    describe('numberChecker', () => {
        it('works with a number', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        })

        it('does not work with invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
            expect(() => testNumbers.numberChecker(undefined)).to.throw();
        })
    });

    describe('averageSumArray', () => {
        it('works with numbers array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        })
    });
})
