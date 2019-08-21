/*
=================================
Object group class and sort score
=================================
[INSTRUCTION]
Diberikan arr object nilai-nilai murid dengan struktur object nama, score dan class,
tugas anda adalah memanipulasi data tersebut dengan meng-group berdasarkan
kelas dan sort ascending untuk score-nya!
[EXAMPLE]
- Bila arr of ojects adalah :
console.log(
 [
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ]
maka hasilnya adalah:
{ A:
   [ { name: 'david', score: 32 },
     { name: 'amy', score: 80 },
     { name: 'debby', score: 100 } ],
  B:
   [ { name: 'aakansha', score: 75 },
     { name: 'heraldo', score: 90 },
     { name: 'arnold', score: 100 } ],
  C: [ { name: 'aleksa', score: 90 } ] }
[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/

function groupSort(arr) {
  const result = {}

  for (let i = 0; i < arr.length - 1; i) {
    if (arr[i + 1].score < arr[i].score) {
      const temp = arr[i + 1]
      arr[i + 1] = arr[i]
      arr[i] = temp
      i = Math.max(0, i - 1)
    } else i++
  }

  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i].kelas]) {
      result[arr[i].kelas] = []
    }
    result[arr[i].kelas].push({ name: arr[i].name, score: arr[i].score })
  }

  return result
}

console.log(
  groupSort([
    {
      name: 'debby',
      score: 100,
      kelas: 'A'
    },
    {
      name: 'amy',
      score: 80,
      kelas: 'A'
    },
    {
      name: 'david',
      score: 32,
      kelas: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      kelas: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      kelas: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      kelas: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      kelas: 'C'
    }
  ])
)
/*
//  { A:
//     [ { name: 'david', score: 32 },
//       { name: 'amy', score: 80 },
//       { name: 'debby', score: 100 } ],
//    B:
//     [ { name: 'aakansha', score: 75 },
//       { name: 'heraldo', score: 90 },
//       { name: 'arnold', score: 100 } ],
//    C: [ { name: 'aleksa', score: 90 } ] }
//    */
//    */
