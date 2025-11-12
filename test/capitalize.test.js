import { AssertionError, expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("Testing capitalize utility", () => {
    it("Some input chars uppercase, Should return only first char uppercase.", () => {
        
        expect(capitalize("cOfFeE")).to.equal("Coffee");
    });
    it("Empty string should, return empty string", () => {
        
        expect(capitalize("")).to.equal("");
    });
     it("Invalid input, should throw error", () => {
        expect(capitalize(null)).to.throw(AssertionError);
        // when capitalizing null, returns Null, but should not
    });
    
})

