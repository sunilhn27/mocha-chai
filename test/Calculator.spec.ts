import { describe } from "mocha";
import Calculator from "../src/Calculator";
import { expect } from "chai";


describe("testing Calculator class", () => {

    it("Test add method", () => {
        const obj = new Calculator(); //instance
        const result = obj.add(5, 5);
        expect(result).to.equal(10)
    })

    it("Test Sub method", () => {
        const obj = new Calculator(); //instance
        const result = obj.sub(10, 5);
        expect(result).to.equal(5)
    })

    it("Test Mul method", () => {
        const obj = new Calculator(); //instance
        const result = obj.mul(5, 5);
        expect(result).to.equal(25)
    })
    it("Test Div method", () => {
        const obj = new Calculator(); //instance
        const result = obj.div(9, 3);
        expect(result).to.equal(3)

        // const result2 =obj.div(5,0);
        // expect(result2).to.throw("Zero cannot be divided")
        expect(() => obj.div(10, 0)).to.throw("Zero cannot be divided")


    })

})