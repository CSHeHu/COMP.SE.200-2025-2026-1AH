import { expect } from 'chai'
import filter from '../src/filter.js'

describe('"Test suite 4: Testing filter utility. Tests generated with GitHub Copilot (GPT-5 Mini model)', () => {
  it('TC1: Returns [[]] when array is null', () => {
    expect(filter(null, () => true)).to.deep.equal([[]])
  })

  it('TC2: Returns [[]] when array is empty', () => {
    expect(filter([], () => true)).to.deep.equal([[]])
  })

  it('TC3: Filters odd numbers correctly', () => {
    expect(filter([1, 2, 3, 4, 5], (v) => v % 2 === 1)).to.deep.equal([1, 3, 5])
  })

  it('TC4: Returns [[]] when no elements match', () => {
    expect(filter([2, 4, 6], (v) => v % 2 === 1)).to.deep.equal([[]])
  })

  it('TC5: Predicate receives index and array arguments', () => {
    const arr = [10, 20, 30]
    const seen = []
    const result = filter(arr, (v, i, a) => {
      seen.push([v, i, a === arr])
      return i === 1
    })
    expect(result).to.deep.equal([20])
    expect(seen.length).to.equal(3)
    expect(seen[2][2]).to.be.true
  })

  it('TC6: Works when all elements match', () => {
    expect(filter([1, 1], () => true)).to.deep.equal([1, 1])
  })
})
