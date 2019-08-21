/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/
// [1:12 PM]
function eMoneySplit(stringData) {
  if (!stringData) return 'tidak ada catatan eMoney'
  stringData = stringData.split(',')
  let splitData = []

  for (let i = 0; i < stringData.length; i++) {
    splitData.push(stringData[i].split(':'))
  }

  splitData = splitData.sort(function(a, b) {
    return a[1] < b[1]
  })

  if (splitData.length == 1) {
    return `terbanyak adalah ${splitData[0][0]} dan terdikit adalah ${splitData[0][0]}`
  }

  return `terbanyak adalah ${splitData[0][0]} dan terdikit adalah ${
    splitData[splitData.length - 1][0]
  }`
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney
