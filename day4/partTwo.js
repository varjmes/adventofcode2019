const { hasAscendingNumbers } = require('./partOne')

const lowerBound = 234208
const upperBound = 765869

const hasAdjacentNumbers = password => {
  for (let i = 0; i < password.length; i++) {
    const regex = new RegExp(`${password[i]}{2,}`, 'g')
    const matches = password.match(regex)
    if (matches && matches.some(el => el.length === 2)) return true
  }

  return false
}

const isGenuinePassword = password => {
  return hasAdjacentNumbers(password) && hasAscendingNumbers(password)
}

const genuinePasswords = []

for (let i = lowerBound; i <= upperBound; i++) {
  const password = i.toString()
  if (isGenuinePassword(password)) {
    genuinePasswords.push(password)
  }
}

// console.log(genuinePasswords)

module.exports = {
  hasAdjacentNumbers,
}
