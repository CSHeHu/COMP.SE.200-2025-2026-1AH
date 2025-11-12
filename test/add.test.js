import { expect } from 'chai'
import add from '../src/add.js'

describe('Testing add utility:', () => {
  it('TC1: add two positive integers', () => {
    expect(add(6, 4)).to.equal(10)
  })

  it('TC2: add two negative integers', () => {
    expect(add(-2, -4)).to.equal(-6)
  })

  it('TC3: add positive and negative integer', () => {
    expect(add(5, -2)).to.equal(3)
  })

  it('TC4: add zero to a number', () => {
    expect(add(0, 8)).to.equal(8)
  })

  it('TC5: add a number to zero', () => {
    expect(add(8, 0)).to.equal(8)
  })

  it('TC6: Add two zeros', () => {
    expect(add(0, 0)).to.equal(0)
  })

  it('TC7: Add two floating point numbers', () => {
    expect(add(2.5, 3.1)).to.equal(5.6)
  })
  
  it('TC8: Add integer and floating point number', () => {
    expect(add(7, 2.5)).to.equal(9.5)
  })
  
  it('TC9: Add large numbers', () => {
    expect(add(1.00E+12, 1.00E+12)).to.equal(2.00E+12)
  })

  it('TC10: Add small numbers', () => {
    expect(add(1.00E-12, 1.00E-12)).to.equal(2.00E-12)
  })

  it('TC11: Add undefined to number', () => {
    expect(add(undefined, 4)).to.equal(4)
  })

  it('TC12: Add two non-numberic strings', () => {
    expect(add("a", "b")).to.equal(0)
  })
})

