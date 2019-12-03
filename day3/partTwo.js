const { generateCoordinates, getIntersections } = require('./partOne')
const getFewestSteps = (wireOne, wireTwo, intersections) => {
  const steps = []

  intersections.forEach(intersection => {
    let wireOneSteps, wireTwoSteps;
    for (let i = 0; i < wireOne.length; i++) {
      if (wireOne[i][0] === intersection[0] && wireOne[i][1] === intersection[1]) {
        wireOneSteps = i + 1
      }
    }

    for (let j = 0; j < wireTwo.length; j++) {
      if (wireTwo[j][0] === intersection[0] && wireTwo[j][1] === intersection[1]) {
        wireTwoSteps = j + 1
      }
    }

    steps.push(wireOneSteps + wireTwoSteps)
  })

  return Math.min(...steps)
}

// const fs = require('fs')
// const [wireOne, wireTwo] = fs.readFileSync('input.txt').toString().split('\n');

// const wireOneCoords = generateCoordinates(wireOne.split(','))
// const wireTwoCoords = generateCoordinates(wireTwo.split(','))
// const intersections = getIntersections(wireOneCoords, wireTwoCoords)
// getFewestSteps(wireOneCoords, wireTwoCoords, intersections)

module.exports = {
  getFewestSteps
}
