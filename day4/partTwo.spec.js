const { hasAdjacentNumbers } = require('./partTwo')

describe('hasAdjacentNumbers', () => {
  it('should return false when password has no adjacent numbers', () => {
    const input = '123456'
    expect(hasAdjacentNumbers(input)).toEqual(false)
  })
  
  it('should return true when password has two adjacent numbers', () => {
    const input = '112233'
    expect(hasAdjacentNumbers(input)).toEqual(true)
  })

  it('should return false when password has no group of two adjacent numbers', () => {
    const input = '111134'
    expect(hasAdjacentNumbers(input)).toEqual(false)
  })

  it('should return true when password has a group of two adjacent numbers', () => {
    const input = '111122'
    expect(hasAdjacentNumbers(input)).toEqual(true)
  })
})
