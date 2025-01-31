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

    it("should have proper value", () => {
    const c = calc(3)
    const result = c.v
    expect(result).to.equal(3)
    });

    describe("add", () => {
        it("should exist", () => {
            //given
            const c = calc(5);
            //when
            //then
            expect(c.add).not.to.be.undefined;
        });

        it("should be able to add number to current value", () => {
            const c = calc(3);
            const result = c.add(5).v;
            expect(result).to.equal(8);
        });

        //it("should throw error if we try to add a letter", () => {
        //    const c = calc(3);
        //    expect(()=> c.add("a")).to.throw("Error");

        //});

    });
    describe("minus", () => {
        it("should exist", () => {
            const c = calc(2);
            expect(c.minus).not.to.be.undefined;
        });

        it("should be able to substract a number from the current value", () => {
            const c = calc(3);
            const result = c.minus(2).v;
            expect(result).to.equal(1);
        });
    });

    describe("sqrt", () => {
        it("should exist", () => {
            const c = calc(2);
            expect(c.sqrt).not.to.be.undefined;
        });

        it("should be able to calculate square root of a number", () => {
            const c = calc(4);
            const result = c.sqrt().v;
            expect(result).to.equal(2);
        });

        it("should throw an error in case of negative sqrt", () => {
            const c = calc(-3);
            expect(() => c.sqrt()).to.throw("Square root of a negative value cannot be determined!");
        });
    });

    describe("times", () => {
        it("should exist", () => {
            const c = calc(2);
            expect(c.times).not.to.be.undefined;
        });

        it("should be able to multiply a number", () => {
            const c = calc(3);
            const result = c.times(10).v;
            expect(result).to.equal(30);
        });
    });

    describe("modulo", () => {
        it("should exist", () => {
            const c = calc(2);
            expect(c.modulo).not.to.be.undefined;
        });

        it("should be able to modulo a number", () => {
            const c = calc(10);
            const result = c.modulo(5).v;
            expect(result).to.equal(0);
        });
    });

    describe("divide", () => {
        it("should exist", () => {
            //Given
            const c = calc(42);
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
            expect(() => c.divide(0)).to.throw("Division by 0 is not possible!");
            //expect(c.divide.bind(null,0)).to.throw("Division by 0 is not possible!");
        });
    });

    describe("multiple operations", () => {

        it("should be able to do multiple operations and return correct number", () => {
            const c = calc(3);
            const result = c.add(4).minus(3).times(6).v;
            expect(result).to.equal(24);
        });
    });


});