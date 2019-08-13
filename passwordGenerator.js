function changeVocals(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA'
  let changeString = ''
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'A' ||
      str[i] == 'i' ||
      str[i] == 'I' ||
      str[i] == 'u' ||
      str[i] == 'U' ||
      str[i] == 'e' ||
      str[i] == 'E' ||
      str[i] == 'o' ||
      str[i] == 'O'
    ) {
      const indexStr = alphabet.indexOf(str[i])
      changeString += alphabet[indexStr + 1]
    } else {
      changeString += str[i]
    }
  }
  return changeString
}

function reverseWord(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

function setLowerUpperCase(str) {
  let lowerUpperCase = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      lowerUpperCase += str[i].toUpperCase()
    } else {
      lowerUpperCase += str[i].toLowerCase()
    }
  }
  return lowerUpperCase
}

function removeSpaces(str) {
  let noSpaces = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      noSpaces.push(str[i])
    }
  }
  str = noSpaces.join('').trim()
  return str
}

function passwordGenerator(name) {
  if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

  name = changeVocals(name)
  name = reverseWord(name)
  name = setLowerUpperCase(name)
  name = removeSpaces(name)

  return name
}

console.log(passwordGenerator('Sergei Dragunov')) // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')) // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')) // 'JFXFLb'
console.log(passwordGenerator('Alex')) // 'Minimal karakter yang diinputkan adalah 5 karakter'
