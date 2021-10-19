let {expect} = require('chai');
let pizzUni = require('../mochaTests');

describe('pizzUni', () => {
    describe('makeAnOrder', () => {
        it('works', () => {
            pizzUni.makeAnOrder({orderedPizza: 'Italy', orderedDrink: 'Tea'})
            expect(pizzUni.makeAnOrder({orderedPizza: 'Italy', orderedDrink: 'Tea'})).to.equal('You just ordered Italy and Tea.');
        });

        it('does not works with empty order', () => {
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    });

    describe('getRemainingWork', () => {
        it('all orders are completed', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Pizza1', status: 'ready'}])).to.equal('All orders are complete!');
        });

        it('all orders are completed', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Pizza1', status: 'preparing'}])).to.equal('The following pizzas are still preparing: Pizza1.');
        });
    });

    describe('orderType', () => {
        it('works with "Carry Out" orders', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
        });

        it('works with "Delivery" orders', () => {
            expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
        });
    });
})