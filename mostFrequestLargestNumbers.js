function sorting(arrNumber) {
  if (!arrNumber.length) return []
  const result = []
  const sorted = []
  let largestNum = 0

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > largestNum) {
      largestNum = arrNumber[i]
    }
  }

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === largestNum) {
      sorted.push(arrNumber[i])
    }
  }

  result.push(largestNum, sorted)
  return result
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''
  return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${arrNumber[1].length} kali`
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
