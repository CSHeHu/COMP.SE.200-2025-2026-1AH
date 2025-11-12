import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("Testing isEmpty utility: if is empty return true otherwise false", () => {
    it("Returns true for null value", () => {
        expect(isEmpty(null)).to.equal(true);
    });
    it("Returns true for intger value", () => {
        expect(isEmpty(1)).to.equal(true);
    });
    it("Return true for empty prototype", () => {
        function Person() {}
        expect(isEmpty(Person.prototype)).to.equal(true);
    });

    it("Return true for empty map object", () => {
        expect(isEmpty(new Map())).to.equal(true);
    });
    it("Return false for non-empty array", () => {
        expect(isEmpty([1, 2])).to.equal(false);
    });
    it("Return false for non-empty dictionary", () => {
        expect(isEmpty({'a': 1})).to.equal(false);
    });
    
})
