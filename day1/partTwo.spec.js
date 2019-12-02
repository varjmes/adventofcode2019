const calculateFuel = require('./partTwo')
const modules = [12, 14, 1969, 100756]

describe('calculateFuel', () => {
  it('should calculate the correct amount of fuel for a single module', () => {
    const result = calculateFuel([modules[0]])
    expect(result).toEqual(2)
  })

  it('should calculate the correct amount of fuel for a single module', () => {
    const result = calculateFuel([modules[1]])
    expect(result).toEqual(2)
  })

  it('should calculate the correct amount of fuel for a single module', () => {
    const result = calculateFuel([modules[2]])
    expect(result).toEqual(966)
  })

  it('should calculate the correct amount of fuel for a single module', () => {
    const result = calculateFuel([modules[3]])
    expect(result).toEqual(50346)
  })

  it('should calculate the correct amount of fuel needed for launch', () => {
    const result = calculateFuel(modules)
    expect(result).toEqual(51316)
  })
})
