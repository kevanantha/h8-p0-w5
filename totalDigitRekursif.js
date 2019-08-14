function totalDigitRekursif(angka) {
  let angkaString = angka.toString()
  let sum = angkaString % 10

  if (!angka) return 0
  angkaString = angkaString.slice(0, -1)
  return (sum += totalDigitRekursif(angkaString))
}

// TEST CASES
console.log(totalDigitRekursif(512)) // 8
console.log(totalDigitRekursif(1542)) // 12
console.log(totalDigitRekursif(5)) // 5
console.log(totalDigitRekursif(21)) // 3
console.log(totalDigitRekursif(11111)) // 5
