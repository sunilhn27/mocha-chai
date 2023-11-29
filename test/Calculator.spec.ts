import { describe } from "mocha";
import Calculator from "../src/Calculator";
import { expect } from "chai";


describe("testing Calculator class", () => {

    it("Test add method", () => {
        const obj = new Calculator(); //instance
        const result =obj.add(5,5);
        expect(result).to.equal(10)
    })

    it("Test Sub method", () => {
        const obj = new Calculator(); //instance
        const result =obj.sub(10,5);
        expect(result).to.equal(5)
    })

    it("Test Mul method", () => {
        const obj = new Calculator(); //instance
        const result =obj.mul(5,5);
        expect(result).to.equal(25)
    })

})