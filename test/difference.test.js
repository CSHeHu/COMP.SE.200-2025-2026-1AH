import { expect } from "chai";
import difference from "../src/difference.js";

describe("Testing difference utility: compares two arrays. Returns array", () => {
    it("Comparing longer array to shorter", () => {
        
        expect(difference([2,1,5,6],[2,3])).to.eql([1,5,6]);
    });
    it("Comparing shorter array to longer", () => {
        
        expect(difference([2,1,"a"],[2,3,4,5])).to.eql([1,"a"]);
    });
    it("Comparing arrays with unusual values such as null or Nan", () => {
        
        expect(difference([null,NaN,undefined],[NaN])).to.eql([null,undefined]);
    });
    it("Comparing non-array to array. Returns empty array", () => {
        
        expect(difference(null,[2])).to.eql([]);
    });
    
})