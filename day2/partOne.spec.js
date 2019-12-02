const { intCode, executeOperation } = require('./partOne')

describe('executeOperation', () => {
  it('should halt on opcode 99', () => {
    const result = executeOperation([99, 0, 0, 0], 0)
    expect(result).toEqual([99, 0, 0, 0])
  })

  it('should add on opcode 1', () => {
    const result = executeOperation([1, 1, 2, 3], 0)
    expect(result).toEqual([1, 1, 2, 3])
  })

  it('should multiply on opcode 2', () => {
    const result = executeOperation([2, 2, 2, 2], 0)
    expect(result).toEqual([2, 2, 4, 2])
  })
})

describe('Intcode program', () => {
  it('should handle more than one operation set', () => {
    const result = intCode([1, 0, 0, 0, 99])
    expect(result).toEqual([2, 0, 0, 0, 99])
  })

  it('should handle more than one operation set', () => {
    const result = intCode([2, 3, 0, 3, 99])
    expect(result).toEqual([2, 3, 0, 6, 99])
  })

  it('should handle more than one operation set', () => {
    const result = intCode([2, 4, 4, 5, 99, 0])
    expect(result).toEqual([2, 4, 4, 5, 99, 9801])
  })

  it('should handle more than one operation set', () => {
    const result = intCode([1, 1, 1, 4, 99, 5, 6, 0, 99])
    expect(result).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99])
  })
})