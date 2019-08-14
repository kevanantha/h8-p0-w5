function sorting(arrNumber) {
  if (!arrNumber.length) return []

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i + 1] < arrNumber[i]) {
      const temp = arrNumber[i + 1]
      arrNumber[i + 1] = arrNumber[i]
      arrNumber[i] = temp
      i = -1
    }
  }

  return arrNumber
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  let largestNumber = 0
  let mostFrequentNumber = 0

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > largestNumber) {
      largestNumber = arrNumber[i]
    }
  }

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === largestNumber) mostFrequentNumber++
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${mostFrequentNumber} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber)
  var countHighest = getTotal(listSort)
  return countHighest
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]))
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]))
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]))
//''
