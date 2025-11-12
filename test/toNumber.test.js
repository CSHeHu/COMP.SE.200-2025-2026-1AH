import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('Testing toNumber utility: Tests generated with AI assistance (GitHub Copilot)', () => {
  it('returns numbers unchanged', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(0)).to.equal(0);
  });

  it('parses numeric strings', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('  42  ')).to.equal(42);
  });

  it('parses binary and octal string prefixes', () => {
    expect(toNumber('0b11')).to.equal(3);
    expect(toNumber('0o7')).to.equal(7);
  });

  it('parses hex strings and treats signed hex as bad', () => {
    expect(toNumber('0x1f')).to.equal(31);
    // signed hex like '-0x1f' is treated as bad and should produce NaN
    expect(Number.isNaN(toNumber('-0x1f'))).to.be.true;
  });

  it('converts objects via valueOf or toString', () => {
    const obj = { valueOf() { return 5; } };
    expect(toNumber(obj)).to.equal(5);

    const obj2 = { valueOf() { return { a: 1 }; }, toString() { return '7'; } };
    expect(toNumber(obj2)).to.equal(7);
  });

  it('returns NaN for symbols', () => {
    expect(Number.isNaN(toNumber(Symbol('x')))).to.be.true;
  });

  it('handles null and undefined', () => {
    expect(toNumber(null)).to.equal(0);
    expect(Number.isNaN(toNumber(undefined))).to.be.true;
  });
});
