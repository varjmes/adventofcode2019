const { calculateManhattanDistance, generateCoordinates, generateCoord, getIntersections } = require('./partOne')


describe('generateCoord', () => {
  it('should generate the correct coordinate when moving right', () => {
    const result = generateCoord('R', 0, 0)
    const expected = [1, 0]
    expect(result).toEqual(expected)
  })

  it('should generate the correct coordinate when moving left', () => {
    const result = generateCoord('L', 0, 0)
    const expected = [-1, 0]
    expect(result).toEqual(expected)
  })

  it('should generate the correct coordinate when moving up', () => {
    const result = generateCoord('U', 0, 0)
    const expected = [0, 1]
    expect(result).toEqual(expected)
  })

  it('should generate the correct coordinate when moving down', () => {
    const result = generateCoord('D', 0, 0)
    const expected = [0, -1]
    expect(result).toEqual(expected)
  })
})

describe('generateCoordinates', () => {
  it('should generate the correct co-ordinate array', () => {
    const result = generateCoordinates(['R4', 'U3', 'L1'])
    const expected = [[1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [3, 3]]
    expect(result).toEqual(expected)
  })
})

describe('getIntersections', () => {
  it('should get an intersection', () => {
    const wireOne = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 3]]
    const wireTwo = [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5]]

    const crossPoints = getIntersections(wireOne, wireTwo)
    expect(crossPoints).toEqual([[1, 4]])
  })
})


describe('Manhattan Distance', () => {
  it('should calculate the correct distance', () => {
    const wireOne = ['R4', 'U3', 'L1']
    const wireTwo = ['U1', 'R5']
    const distance = 5;
    const result = calculateManhattanDistance(wireOne, wireTwo)

    expect(result).toEqual(distance)
  })

  it('should calculate the correct distance', () => {
    const wireOne = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72']
    const wireTwo = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
    const distance = 159;
    const result = calculateManhattanDistance(wireOne, wireTwo)

    expect(result).toEqual(distance)
  })

  it('should calculate the correct distance', () => {
    const wireOne = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51']
    const wireTwo = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']
    const distance = 135;
    const result = calculateManhattanDistance(wireOne, wireTwo)

    expect(result).toEqual(distance)
  })
})
