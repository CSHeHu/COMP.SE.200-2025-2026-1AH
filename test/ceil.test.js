import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('Testing ceil utility: should round number "upwards"' , () => {
  it('Rounding up postive float, precision 0', () => {
    expect(ceil(3.14,0)).to.equal(4);
  });
  it('Rounding up positive float, precision 5', () => {
    expect(ceil(3.1415926535,5)).to.equal(3.1416);
  });
  it('Rounding up positive float, but precision -2', () => {
    expect(ceil(3.1415926,-2)).to.equal(100);
  });
  it('Rounding up negative float, precision 0', () => {
    expect(ceil(-3.14,0)).to.equal(-3);
  });
  it('Trying to round up 0', () => {
    expect(ceil(0,2)).to.equal(0);
  });
  it('Trying to round up null', () => {
    expect(ceil(null,2)).to.eql(NaN);
  });
  it('Trying to round up string', () => {
    expect(ceil("AA",2)).to.eql(NaN);
  });

})