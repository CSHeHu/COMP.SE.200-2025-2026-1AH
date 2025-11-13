import { expect } from 'chai';
import map from '../src/map.js';

describe('Test suite 6: Testing map utility: Runs array of elements through iteratee, return array.', () => {
  it('TC1: Iterating calculation function over array of numbers', () => {
    function square(n) {
      return n * n;
    }
    const array = [3, 8.10, -4]
    expect(map(array, square)).to.eql([9, 65.61, 16]);
  });
  it('TC2: Iterating over array of strings', () => {
    function iteratee(n) {
      return n.split(' ');
    }
    const array = ['x', "Supersonic blues machine", "345"]
    expect(map(array, iteratee)).to.eql([["x"], ["Supersonic","blues","machine"], ["345"]]);
  });
  it('TC3: Iterating over array of special case values', () => {
    function iteratee(n) {
      return [n];
    }
    const array = [null, NaN, undefined, ""]
    expect(map(array, iteratee)).to.eql([[null], [NaN], [undefined], [""]]);
  });
  it('TC4: Iterating over null.', () => {
    function iteratee(n) {
      return n+n;
    }
    const value = null 
    expect(map(value, iteratee)).to.eql([]);
  });
  it('TC5: Iterating over undefined.', () => {
    function iteratee(n) {
      return n+n;
    }
    const value = undefined; 
    expect(map(value, iteratee)).to.eql([]);
  });
  it('TC6: Iterating over non-array string.', () => {
    // @param {Array} array , is what is should be object to be iterated over.
    function iteratee(n) {
      return n+n;
    }
    const string = "This is string"; 
    expect(map(string, iteratee).to.throw(TypeError));
  });

})