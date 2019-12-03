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

// let instructions = fs.readFileSync('input.txt').toString().split(',');
// instructions = instructions.map(Number);

// instructions[1] = 12
// instructions[2] = 2

// intCode(instructions)

module.exports = {
  intCode,
  executeOperation
}
