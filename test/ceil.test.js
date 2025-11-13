import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('Testing ceil utility: should round number to "upwards"' , () => {
  it('Rounding up postive float, precision 0', () => {
    expect(ceil(3.14,0)).to.equal(4);
  });
  it('Rounding up positive float, precision 5', () => {
    expect(ceil(3.1415926535,5)).to.equal(3.1416);
  });

})