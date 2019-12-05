const { hasAdjacentNumbers, hasAscendingNumbers, isGenuinePassword } = require('./partOne')

describe('Password Finder', () => {
  describe('hasAdjacentNumbers', () => {
    it('should return false if no adjacent numbers', () => {
      const input = '123456'
      expect(hasAdjacentNumbers(input)).toEqual(false)
    })

    it('should return true if there two adjacent numbers', () => {
      const input = '112345'
      expect(hasAdjacentNumbers(input)).toEqual(true)
    })
    
    it('should return true if there are several adjacent numbers', () => {
      const input = '111111'
      expect(hasAdjacentNumbers(input)).toEqual(true)
    })
  })

  describe('hasAscendingNumbers', () => {
    it('should return false if numbers are not constantly increasing', () => {
      const input = '223450'
      expect(hasAscendingNumbers(input)).toEqual(false)
    })

    it('should return true if numbers are constantly increasing', () => {
      const input = '135679'
      expect(hasAscendingNumbers(input)).toEqual(true)
    })
  })

  describe('isGenuinePassword', () => {
    it('should return false if password does not meet criteria', () => {
      const input = '223450'
      expect(isGenuinePassword(input)).toEqual(false)
    })

    it('should return false if password does not meet criteria', () => {
      const input = '123789'
      expect(isGenuinePassword(input)).toEqual(false)
    })

    it('should return true if password does not meet criteria', () => {
      const input = '111111'
      expect(isGenuinePassword(input)).toEqual(true)
    })
  })
})
