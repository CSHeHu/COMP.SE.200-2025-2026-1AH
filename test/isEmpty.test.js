import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("Test suite 3: Testing isEmpty utility:", () => {
    it("TC1: Returns true for null value", () => {
        expect(isEmpty(null)).to.equal(true);
    });
    it("TC2: Returns true for intger value", () => {
        expect(isEmpty(1)).to.equal(true);
    });
    it("TC3: Return true for empty prototype", () => {
        function Person() {}
        expect(isEmpty(Person.prototype)).to.equal(true);
    });

    it("TC4: Return true for empty map object", () => {
        expect(isEmpty(new Map())).to.equal(true);
    });
    it("TC5: Return false for non-empty array", () => {
        expect(isEmpty([1, 2])).to.equal(false);
    });
    it("TC6: Return false for non-empty dictionary", () => {
        expect(isEmpty({'a': 1})).to.equal(false);
    });
    
})
