let {expect} = require('chai');
let mathEnforcer = require('../sum');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when number is invalid', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive('SoftUni')).to.equal(undefined);
        });
        it('should return number + 5 when number is valid', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(1.1)).to.closeTo(6.1, 0.01);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined when number is invalid', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined)
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined)
            expect(mathEnforcer.subtractTen('SoftUni')).to.equal(undefined)
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined)
        });
        it('should return number minus 10 when number is valid', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(1.1)).to.closeTo(-8.9, 0.01);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
    });

    describe('sum', () => {
        it('should return undefined when any parameter is invalid', () => {
            expect(mathEnforcer.sum(undefined, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
            expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1.1, '1')).to.equal(undefined);
            expect(mathEnforcer.sum(-1, '1')).to.equal(undefined);
        });
        it('should return sum of number when both parameters are valid', function () {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(1.1, 1)).to.closeTo(2.1, 0.01);
            expect(mathEnforcer.sum(1.1, 2.1)).to.closeTo(3.2, 0.01);
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        });
    });
})