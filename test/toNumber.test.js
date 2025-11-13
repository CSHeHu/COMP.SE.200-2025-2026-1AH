import { expect } from 'chai'
import toNumber from '../src/toNumber.js'

describe('Test suite 2: Testing toNumber utility:', () => {
  it('TC1: Retain small float', () => {
    expect(toNumber(0.001)).to.equal(0.001)
  })

  it('TC2: Retain large float', () => {
    expect(toNumber(99999.999)).to.equal(99999.999)
  })

  it('TC3: Retain integer', () => {
    expect(toNumber(1)).to.equal(1)
  })

  it('TC4: Convert boolean to number', () => {
    expect(toNumber(false)).to.equal(0)
  })

  it('TC5: Convert string with white spaces to number', () => {
    expect(toNumber('5.5  ')).to.equal(5.5)
  })

  it('TC6: Try convert text string', () => {
    expect(toNumber('abc')).to.be.NaN
  })

  it('TC7: Convert binary string to number', () => {
    expect(toNumber('00001111')).to.equal(15)
  })

  it('TC8: Convert hexadecimal to number', () => {
    expect(toNumber('0xFF')).to.equal(255)
  })

  it('TC9: Convert octal string value', () => {
    expect(toNumber('017')).to.equal(15)
  })

  it('TC10: Try convert NaN', () => {
    expect(toNumber(NaN)).to.be.NaN
  })

  it('TC11: Try convert undefined', () => {
    expect(toNumber(undefined)).to.be.NaN
  })

  it('TC12: Try convert null', () => {
    expect(toNumber(null)).to.be.NaN
  })
})