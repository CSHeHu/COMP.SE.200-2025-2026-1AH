import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("EmptyTests", () => {
    it("Should return true for null", () => {
        expect(isEmpty(null)).to.equal(true);
    });
    it("Should return true for int", () => {
        expect(isEmpty(1)).to.equal(true);
    });
    it("Should return true for empty prototype", () => {
        function Person() {}
        expect(isEmpty(Person.prototype)).to.equal(true);
    });

    it("Should return true for non-empty map object", () => {
        expect(isEmpty(new Map())).to.equal(true);
    });
    
})
describe("NonEmptyTests", () => {
    it("Should return false for array", () => {
        expect(isEmpty([1, 2])).to.equal(false);
    });
    it("Should return false for empty prototype", () => {
        expect(isEmpty({'a': 1})).to.equal(false);
    });
})