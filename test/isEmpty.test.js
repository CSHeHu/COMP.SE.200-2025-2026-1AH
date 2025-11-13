import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("Test suite 3: Testing isEmpty utility:", () => {
    it("TC1: Returns true for null value", () => {
        expect(isEmpty(null)).to.be.true;
    });
    it("TC2: Returns true for intger value", () => {
        expect(isEmpty(1)).to.be.true;
    });
    it("TC3: Return true for empty prototype", () => {
        function Person() {}
        expect(isEmpty(Person.prototype)).to.be.true;
    });
    it("TC4: Return true for function", () => {
        function foo() {
            const a = 1;
            return a;
        } 
        expect(isEmpty(foo)).to.be.true;
    });
    it("TC5: Return true for empty map object", () => {
        expect(isEmpty(new Map())).to.be.true;
    });
    it("TC6: Function with arguments", () => {
        function foo(n,m) {
            return arguments;
        }
        expect(isEmpty(foo(1,2))).to.be.true;
    });
    it("TC7: Returns true for undefined value", () => {
        expect(isEmpty(undefined)).to.be.true;
    });
    it("TC8: Return true for empty array", () => {
        expect(isEmpty([])).to.be.true;
    });


    it("TC9: Non-empty string", () => {
        expect(isEmpty("test")).to.be.false;
    });

    it("TC9: Non-empty typed array", () => {
        
        expect(isEmpty(new Uint16Array(5))).to.be.false;
    });
    it("TC10: Non-empty buffer", () => {
        const buff = Buffer.from([34,54,76])
        expect(isEmpty(buff)).to.be.false;
    });

    it("TC11: Return false for non-empty array", () => {
        expect(isEmpty([1, 2])).to.be.false;
    });
    it("TC12: Return false for non-empty dictionary", () => {
        expect(isEmpty({'a': 1})).to.be.false;
    });
    it("TC13: Return false for non-empty set", () => {
        expect(isEmpty(new Set(["a","b","c"]))).to.be.false;
    });
    
})
