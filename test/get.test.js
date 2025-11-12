import { expect } from "chai";
import get from "../src/get.js";

describe("Testing get utility: gets object value from path, if path undefined returns default value", () => {
    it("Get object from path", () => {
        const object = { 'a': [{ 'b': { 'c': 10 } }] }
        expect(get(object, 'a[0].b.c')).to.equal(10);
    });
    it("Try to get undefined path", () => {
        expect(get(null, 'a[0]',"default")).to.equal("default");
    });
    
})