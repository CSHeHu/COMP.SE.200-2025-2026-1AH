import { expect } from 'chai';
import map from '../src/map.js';

describe('Testing map utility: Runs array of elements through iteratee, return array.', () => {
  it('Iterating calculation function over array of numbers', () => {
    function square(n) {
      return n * n;
    }
    const array = [3, 8.10, -4]
    expect(map(array, square)).to.eql([9, 65.61, 16]);
  });
  it('Iterating over array of strings', () => {
    function iteratee(n) {
      return n.split(' ');
    }
    const array = ['x', "Supersonic blues machine", "345"]
    expect(map(array, iteratee)).to.eql([["x"], ["Supersonic","blues","machine"], ["345"]]);
  });
  it('Trying iterate over array of special case values', () => {
    function iteratee(n) {
      return [n];
    }
    const array = [null, NaN, undefined, ""]
    expect(map(array, iteratee)).to.eql([[null], [NaN], [undefined], [""]]);
  });
  it('Trying to iterate over null.', () => {
    function iteratee(n) {
      return n+n;
    }
    const value = null 
    expect(map(value, iteratee)).to.eql([]);
  });
  it('Trying to iterate over undefined.', () => {
    function iteratee(n) {
      return n+n;
    }
    const value = undefined; 
    expect(map(value, iteratee)).to.eql([]);
  });
  it('Trying to iterate over non-array string.', () => {
    // @param {Array} array , is what is should be object to be iterated over.
    function iteratee(n) {
      return n+n;
    }
    const string = "This is string"; 
    expect(map(string, iteratee).to.throw(TypeError));
  });

})