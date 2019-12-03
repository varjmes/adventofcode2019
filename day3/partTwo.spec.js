const { calculateManhattanDistance, generateCoordinates, generateCoord, getIntersections } = require('./partOne')
const { getFewestSteps } = require('./partTwo')

describe('getBestIntersection', () => {
  it('should get the fewest amount of steps to reach an intersectio ', () => {
    const wireOne = generateCoordinates(['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'])
    const wireTwo = generateCoordinates(['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'])
    const intersections = getIntersections(wireOne, wireTwo)
    const fewestSteps = getFewestSteps(wireOne, wireTwo, intersections)
    expect(fewestSteps).toEqual(410)
  })

  it('should get the fewest amount of steps to reach an intersectio ', () => {
    const wireOne = generateCoordinates(['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'])
    const wireTwo = generateCoordinates(['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'])
    const intersections = getIntersections(wireOne, wireTwo)
    const fewestSteps = getFewestSteps(wireOne, wireTwo, intersections)
    expect(fewestSteps).toEqual(610)
  })
})
