import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('Test suite 7: Testing ceil utility: should round number "upwards"' , () => {
  it('TC1: Rounding up postive float, precision 0', () => {
    expect(ceil(3.14,0)).to.equal(4);
  });
  it('TC2: Rounding up positive float, precision 5', () => {
    expect(ceil(3.1415926535,5)).to.equal(3.1416);
  });
  it('TC3: Rounding up positive float, but precision -2', () => {
    expect(ceil(3.1415926,-2)).to.equal(100);
  });
  it('TC4: Rounding up negative float, precision 0', () => {
    expect(ceil(-3.14,0)).to.equal(-3);
  });
  it('TC5: Trying to round up 0', () => {
    expect(ceil(0,2)).to.equal(0);
  });
  it('TC6: Trying to round up null', () => {
    expect(ceil(null,2)).to.eql(NaN);
  });
  it('TC7: Trying to round up string', () => {
    expect(ceil("AA",2)).to.eql(NaN);
  });

})