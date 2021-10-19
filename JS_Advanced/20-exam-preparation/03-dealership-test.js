let {expect} = require('chai');
let dealership = require('../mochaTests');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('works with valid old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equal(10000);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.equal(16000);
        });

        it('works with invalid old car', () => {
            expect(dealership.newCarCost('Mazda', 30000)).to.equal(30000);
        });
    });

    describe('carEquipment', () => {
        it('works with valid parameters', () => {
            expect(dealership.carEquipment(['e1', 'e2', 'e3'], [0])).to.eql(['e1']);
        })
    });

    describe('euroCategory', () => {
        it('works with valid parameters', () => {
            dealership.newCarCost('Audi A4 B8', 30000)
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
})