import { expect } from "chai";
import difference from "../src/difference.js";

describe("Test suite 9: Testing difference utility: compares two arrays. Returns array", () => {
    it("TC1: Comparing longer array to shorter", () => {
        
        expect(difference([2,1,5,6],[2,3])).to.eql([1,5,6]);
    });
    it("TC2: Comparing shorter array to longer", () => {
        
        expect(difference([2,1,"a"],[2,3,4,5])).to.eql([1,"a"]);
    });
    it("TC3: Comparing arrays with unusual values such as null or Nan", () => {
        
        expect(difference([null,NaN,undefined],[NaN])).to.eql([null,undefined]);
    });
    it("TC4: Comparing non-array to array. Returns empty array", () => {
        
        expect(difference(null,[2])).to.eql([]);
    });
    
})