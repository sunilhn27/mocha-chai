import { expect } from "chai";
import { describe } from "mocha";

describe("Test Expects data ", () => {

    it("test expect", () => {

        const name: string = "Sunil";
        const age: number = 29;
        const obj: object = { name: "sunil", age: 29 };
        const bool: boolean = true;
        const arr: Array<number> = [1, 2, 3];

        expect(name).to.be.ok;
        expect(name).to.be.equal("Sunil")
        expect(name).to.not.be.equal("Sunil1")
        expect(name).to.be.a("string")

        expect(age).to.be.ok;
        expect(age).to.be.equal(29)
        expect(age).to.not.be.equal("Sunil1")
        expect(age).to.be.a("number")

        expect(bool).to.be.ok;
        expect(bool).to.be.equal(true)
        expect(bool).to.not.be.equal(false)
        expect(bool).to.be.a("boolean")

        expect(obj).to.have.property("name").equal("sunil")
        expect(obj).to.have.property("age").equal(29);
        expect(obj).to.be.a("object")

        expect(arr).to.have.lengthOf(3).that.include(3);
        expect(arr).to.not.have.lengthOf(4).that.include(5);
        expect(arr).to.be.a("array")


    })
})