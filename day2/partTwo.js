const fs = require('fs')

const executeOperation = (input, index) => {
  const opCode = input[index]
  const num1 = input[input[index + 1]]
  const num2 = input[input[index + 2]]
  const position = input[index + 3]

  switch (opCode) {
    case 1:
      input[position] = num1 + num2
      break;
    case 2:
      input[position] = num1 * num2
      break;
    default:
      break;
  }

  return input
}

const intCode = input => {
  let newInput = [...input]

  for (let i = 0; i < newInput.length; i += 4) {
    newInput = executeOperation(newInput, i)
  }

  return newInput
}

const findNounAndVerb = (instructions) => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const attempt = [...instructions]
      attempt[1] = i
      attempt[2] = j
      const result = intCode(attempt)[0]

      if (result === 19690720) {
        return 100 * i + j
      }
    }
  }
}

// let instructions = fs.readFileSync('input.txt').toString().split(',');
// instructions = instructions.map(Number);

// findNounAndVerb(instructions)

module.exports = {
  intCode,
  executeOperation
}
