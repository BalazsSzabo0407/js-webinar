const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator

    it("should have proper value");

    describe("add", () => { 
        it("should exist");

        it("should be able to add number to current value");
    });
    describe("minus", () => {
        it("should exist");

        it("should be able to substract a number from the current value");
    });
    // ...
    describe("divide", () => {
        it("should exist", () => {
            //Given
            const c = calc(42)
            //When
            //Then
            expect(c.divide).not.to.be.undefined;
        });

        it("should be able to perform a valid division", () => {
            // Given
            const c = calc(10);
            // When
            const result = c.divide(2).v;
            // Then
            expect(result).to.equal(5);
        });

        it("should handle division by 0", () => {
            //given
            const c = calc(42);
            //when 
            //then
            expect(() => c.divide.bind(0)).to.throw("Division");
            expect(c.divide.bind(null,0)).to.throw("Division");
        });
    });
    // ...





});