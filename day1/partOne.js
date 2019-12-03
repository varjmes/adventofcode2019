const fs = require('fs')

const calculateFuelForModule = mod => {
  return Math.floor(mod / 3) - 2
}

const calculateFuel = modules => {
  return modules.reduce((total, mod) => {
    return total + calculateFuelForModule(mod)
  }, 0)
}

// const modules = fs.readFileSync('input.txt').toString().split('\n');
// calculateFuel(modules)

module.exports = calculateFuel;
