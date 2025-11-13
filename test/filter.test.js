import { expect } from 'chai'
import filter from '../src/filter.js'

describe('Testing filter utility. Tests generated with GitHub Copilot (GPT-5 Mini model)', () => {
  it('returns [[]] when array is null', () => {
    expect(filter(null, () => true)).to.deep.equal([[]])
  })

  it('returns [[]] when array is empty', () => {
    expect(filter([], () => true)).to.deep.equal([[]])
  })

  it('filters odd numbers correctly', () => {
    expect(filter([1, 2, 3, 4, 5], (v) => v % 2 === 1)).to.deep.equal([1, 3, 5])
  })

  it('returns [[]] when no elements match', () => {
    expect(filter([2, 4, 6], (v) => v % 2 === 1)).to.deep.equal([[]])
  })

  it('predicate receives index and array arguments', () => {
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

  it('works when all elements match', () => {
    expect(filter([1, 1], () => true)).to.deep.equal([1, 1])
  })
})
