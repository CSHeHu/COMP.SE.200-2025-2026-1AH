import { AssertionError, expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("Testing capitalize utility", () => {
    it("Some input chars uppercase, Should return only first char uppercase.", () => {
        
        expect(capitalize("cOfFeE")).to.equal("Coffee");
        expect(capitalize("CoFfEe")).to.equal("Coffee");
    });
    it("Empty string should, return empty string", () => {
        
        expect(capitalize("")).to.equal("");
    });
    it("Number should return number?", () => {
        // Number to capitalize should return what?
        expect(capitalize(1.6)).to.equal(1.6);
    });
     it("Invalid input, should throw error or return itself", () => {
        // when capitalizing null, returns Null
        expect(capitalize(null)).to.equal("null");
        expect(capitalize(undefined)).to.equal(undefined);
    });
    it("Invalid input, should throw error or return itself", () => {
        // when capitalizing undefined, returns Undefined, should it?
        expect(capitalize(undefined)).to.equal(undefined);
    });

})

