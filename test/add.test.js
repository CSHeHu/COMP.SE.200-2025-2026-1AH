import { expect } from 'chai'
import add from '../src/add.js'

describe('TC1', () => {
  it('add two positive integers', () => {
    expect(add(6, 4)).to.equal(10)
  })

  it('add two negative integers', () => {
    expect(add(-2, -4)).to.equal(-6)
  })

  it('add positive and negative integer', () => {
    expect(add(5,-2)).to.equal(3)
  })
})
