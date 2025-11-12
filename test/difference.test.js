import { AssertionError, expect } from "chai";
import difference from "../src/difference.js";

describe("Testing difference utility: compares two arrays. Returns", () => {
    it("Should return array", () => {
        
        expect(difference([],[])).to.be.an('array');
    });
    it("Comparing same size arrays", () => {
        
        expect(difference([2,1],[2,3])).to.eql([1]);
    });
    
    
    
})