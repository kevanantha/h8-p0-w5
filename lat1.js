// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100 },
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
]
console.log(exercise1)

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
function score30(exercise1) {
  const result = []
  for (let i = 0; i < exercise1.length; i++) {
    const { score } = exercise1[i]
    if (score > 30) {
      result.push(exercise1[i])
    }
  }
  return result
}
console.log(score30(exercise1))
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
function score7090(exercise1) {
  const result = []
  for (let i = 0; i < exercise1.length; i++) {
    const { score } = exercise1[i]
    if (score >= 70 && score <= 90) {
      result.push(exercise1[i])
    }
  }
  return result
}
console.log(score7090(exercise1))
/* 
  [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/

// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending berdasarkan score
function sortingScoreAscending(exercise1) {
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    for (let i = 1; i < exercise1.length; i++) {
      if (exercise1[i - 1].score > exercise1[i].score) {
        isSorted = false
        const temp = exercise1[i - 1]
        exercise1[i - 1] = exercise1[i]
        exercise1[i] = temp
      }
    }
  }
  return exercise1
}
console.log(sortingScoreAscending(exercise1))
/* 
  [ 
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/
// Release 2 => sorting isi descending
function sortingScoreDescending(exercise1) {
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    for (let i = 1; i < exercise1.length; i++) {
      if (exercise1[i - 1].score < exercise1[i].score) {
        isSorted = false
        const temp = exercise1[i - 1]
        exercise1[i - 1] = exercise1[i]
        exercise1[i] = temp
      }
    }
  }
  return exercise1
}
console.log(sortingScoreDescending(exercise1))
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/
