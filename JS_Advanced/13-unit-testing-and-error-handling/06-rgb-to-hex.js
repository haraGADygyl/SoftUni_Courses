let {expect} = require('chai');
let rgbToHexColor = require('../sum');

describe('RGB test', () => {
    it('should return white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });

    it('should return black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });

    it('should return undefined for missing values', () => {
        expect(rgbToHexColor(0)).to.equal(undefined)
    });

    it('should return undefined in not an integer value', () => {
        expect(rgbToHexColor('255', 255, 255)).to.equal(undefined)
    });

    it('should return undefined in not an integer value', () => {
        expect(rgbToHexColor(255, '255', 255)).to.equal(undefined)
    });

    it('should return undefined in not an integer value', () => {
        expect(rgbToHexColor(255, 255, '255')).to.equal(undefined)
    });

    it('should return undefined in not an negative integer value', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined)
    });

    it('should return undefined in not an negative integer value', () => {
        expect(rgbToHexColor(255, -1, 255)).to.equal(undefined)
    });

    it('should return undefined in not an negative integer value', () => {
        expect(rgbToHexColor(255, 255, -1)).to.equal(undefined)
    });

    it('should return undefined if more than 255', () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined)
    });

    it('should return undefined if more than 255', () => {
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined)
    });

    it('should return undefined if more than 255', () => {
        expect(rgbToHexColor(255, 255, 256)).to.equal(undefined)
    });
})