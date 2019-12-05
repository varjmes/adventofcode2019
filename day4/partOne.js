const lowerBound = 234208
const upperBound = 765869

const hasAdjacentNumbers = password => {
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i + 1]) return true
  }

  return false
}

const hasAscendingNumbers = password => {
  for (let i = 0; i < password.length; i++) {
    if (password[i + 1] && !(password[i + 1] >= password[i])) {
      return false
    }
  }

  return true
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

// console.log(genuinePasswords.length)

module.exports = {
  hasAdjacentNumbers,
  hasAscendingNumbers,
  isGenuinePassword
}