import { expect } from 'chai';
import eq from '../src/eq.js';

describe('Testing eq utility: Tests generated with Microsoft Copilot AI (Tuni)', () => {
  it('should return true for the same object reference', () => {
    const object = { a: 1 };
    expect(eq(object, object)).to.be.true;
  });

  it('should return false for different objects with same properties', () => {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(eq(object, other)).to.be.false;
  });

  it('should return true for equal primitive strings', () => {
    expect(eq('a', 'a')).to.be.true;
  });

  it('should return false for string and String object', () => {
    expect(eq('a', Object('a'))).to.be.false;
    // Should return false, but does return true.
  });

  it('should return true for NaN compared to NaN', () => {
    expect(eq(NaN, NaN)).to.be.true;
  });

  it('should return true for equal numbers', () => {
    expect(eq(42, 42)).to.be.true;
  });

  it('should return false for different numbers', () => {
    expect(eq(42, 43)).to.be.false;
  });

  it('should return true for boolean values that are equal', () => {
    expect(eq(true, true)).to.be.true;
    expect(eq(false, false)).to.be.true;
  });

  it('should return false for different boolean values', () => {
    expect(eq(true, false)).to.be.false;
  });

  it('should return true for null compared to null', () => {
    expect(eq(null, null)).to.be.true;
  });

  it('should return false for null compared to undefined', () => {
    expect(eq(null, undefined)).to.be.false;
    // This also return false, even thoough it shoyld return true.
  });

  it('should return true for undefined compared to undefined', () => {
    expect(eq(undefined, undefined)).to.be.true;
  });

  it('should return false for number and string with same value', () => {
    expect(eq(1, '1')).to.be.false;
    // This should return false, but it returns true.
  });
});