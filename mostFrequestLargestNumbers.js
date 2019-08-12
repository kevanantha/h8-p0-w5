function sorting(arrNumber) {
  const sorted = []
  arrNumber = arrNumber.sort((a, b) => b - a)

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === arrNumber[i + 1]) {
      sorted.push(arrNumber[i])
    } else {
      sorted.push(arrNumber[i])
      break
    }
  }
  return sorted
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''
  return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${arrNumber.length} kali`
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
