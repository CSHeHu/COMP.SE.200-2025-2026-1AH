import { AssertionError, expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("Test suite 10: Testing capitalize utility", () => {
    it("TC1: Some input chars uppercase, Should return only first char uppercase.", () => {
        
        expect(capitalize("cOfFeE")).to.equal("Coffee");
        expect(capitalize("CoFfEe")).to.equal("Coffee");
    });
    it("TC2: Empty string should, return empty string", () => {
        
        expect(capitalize("")).to.equal("");
    });
    it("TC3: Number should return number?", () => {
        // Number to capitalize should return what?
        expect(capitalize(1.6)).to.equal(1.6);
    });
     it("TC4: Invalid input, should throw error or return itself", () => {
        // when capitalizing null, returns Null
        expect(capitalize(null)).to.equal("null");
    });
    it("TC5: Invalid input, should throw error or return itself", () => {
        // when capitalizing undefined, returns Undefined, should it?
        expect(capitalize(undefined)).to.equal(undefined);
    });

})

