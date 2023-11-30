import { beforeEach, describe } from "mocha";
import Calculator from "../src/Calculator";
import { expect } from "chai";


describe("testing Calculator class", () => {
let obj:Calculator;

    before(() => {
        console.log("This is Before")
         obj = new Calculator(); //instance

    })

    it("Test add method", () => {
        const result = obj.add(5, 5);
        expect(result).to.equal(10)
    })

    it("Test Sub method", () => {
      //  const obj = new Calculator(); //instance
        const result = obj.sub(10, 5);
        expect(result).to.equal(5)
    })

    it("Test Mul method", () => {
        const result = obj.mul(5, 5);
        expect(result).to.equal(25)
    })
    it("Test Div method", () => {
        const result = obj.div(9, 3);
        expect(result).to.equal(3)
        expect(() => obj.div(10, 0)).to.throw("Zero cannot be divided")
    })

    after(() => {
        console.log("This is after")
    })

    beforeEach(() => {
        console.log("This is Before Each")

    })


    afterEach(() => {
        console.log("This is After Each")

    })
})