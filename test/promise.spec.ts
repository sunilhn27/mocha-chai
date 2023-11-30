import { describe } from "mocha";
import Calculator from "../src/Calculator";
import { expect } from "chai";


describe.only("testing Calculator class", () => {

    it("validate async func", async () => {
        const obj = new Calculator();
        const result = await obj.asyncFunction()
        expect(result).to.be.equal(5);
    })

    it("validate async func with then",() => {
        const obj = new Calculator();
        obj.asyncFunction().then((result)=>{
            expect(result).to.be.equal(5);
        })  
    })
})