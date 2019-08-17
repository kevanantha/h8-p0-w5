function kaliTerusRekursif(angka) {
  const angkaString = angka.toString()
  if (angkaString.length === 1) return angkaString

  let initNum = 1
  for (let i = 0; i < angkaString.length; i++) {
    initNum *= Number(angkaString[i])
  }
  return kaliTerusRekursif(initNum)
}

// TEST CASES
console.log(kaliTerusRekursif(21)) // 8
console.log(kaliTerusRekursif(66)) // 8
console.log(kaliTerusRekursif(3)) // 3
console.log(kaliTerusRekursif(24)) // 8
console.log(kaliTerusRekursif(654)) // 0
console.log(kaliTerusRekursif(1231)) // 6
