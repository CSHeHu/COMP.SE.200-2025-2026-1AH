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
        function testFunc() {
            // when capitalizing null, returns Null
            expect(capitalize(null)).to.equal("null");
        }
        
        expect(() => testFunc()).to.throw(AssertionError);
        
    });
    
})

