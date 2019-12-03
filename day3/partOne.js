const generateCoord = (direction, x, y) => {
  let newX = x
  let newY = y

  switch (direction) {
    case 'R':
      newX++
      break
    case 'L':
      newX--
      break
    case 'U':
      newY++
      break
    case 'D':
      newY--
      break
    default:
      break;
  }

  return [newX, newY]
}

const generateCoordinates = instructions => {
  const coOrdinates = []
  let x = 0;
  let y = 0;

  for (let i = 0; i < instructions.length; i++) {
    const direction = instructions[i][0]
    const steps = parseInt(instructions[i].slice(1), 10)
    for (let j = 0; j < steps; j++) {
      const newCoOrd = generateCoord(direction, x, y)
      coOrdinates.push(newCoOrd)
      x = newCoOrd[0]
      y = newCoOrd[1]
    }
  }

  return coOrdinates
}

const getIntersections = (wireOne, wireTwo) => {
  const crossPoints = []

  for (let i = 0; i < wireOne.length; i++) {
    for (let j = 0; j < wireTwo.length; j++) {
      if (wireOne[i][0] === wireTwo[j][0] && wireOne[i][1] === wireTwo[j][1]) {
        crossPoints.push(wireOne[i])
      }
    }
  }

  return crossPoints
}

const calculateManhattanDistance = (wireOne, wireTwo) => {
  const wireOneCoords = generateCoordinates(wireOne)
  const wireTwoCoords = generateCoordinates(wireTwo)
  const intersections = getIntersections(wireOneCoords, wireTwoCoords)

  const distances = intersections.map(intersection => {
    const xAbs = Math.abs(intersection[0])
    const yAbs = Math.abs(intersection[1])
    return xAbs + yAbs
  })

  return Math.min(...distances)
}

// const fs = require('fs')
// const [wireOne, wireTwo] = fs.readFileSync('input.txt').toString().split('\n');
// calculateManhattanDistance(wireOne.split(','), wireTwo.split(','))

module.exports = {
  calculateManhattanDistance,
  generateCoordinates,
  generateCoord,
  getIntersections
}
