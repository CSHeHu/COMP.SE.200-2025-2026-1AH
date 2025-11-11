import { expect } from "chai";
import add from "../src/add.js";

describe("addTests", () => {
    it("Should add two positive numbers", () => {
        expect(add(6, 4)).to.equal(10);
    });
    it("Should add to negative numbers", () => {
        expect(add(-6, -4)).to.equal(-10);
    });
})