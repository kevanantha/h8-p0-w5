'use strict'
/*
============
dataSiswa
============

[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.

Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.


[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
2. Diasumsikan tidak ada siswa yang memperoleh nilai yang sama

[RULES]
2. Dilarang menggunakan built-in split

*/

function dataSiswa(scoreRecord) {
  if (!scoreRecord) return 'tidak ada catatan hasil test hari ini'
  let splitStrComma = []
  let tempComma = ''
  let spliStr = []
  const result = []

  for (let i = 0; i < scoreRecord.length; i++) {
    if (scoreRecord[i] == '-' || scoreRecord[i] == ',') {
      splitStrComma.push(tempComma)
      tempComma = ''
    } else {
      tempComma += scoreRecord[i]
    }
    if (i == scoreRecord.length - 1) splitStrComma.push(tempComma)
  }

  for (let i = 0; i < splitStrComma.length; i += 3) {
    spliStr.push([splitStrComma[i], splitStrComma[i + 1], splitStrComma[i + 2]])
  }

  for (let i = 0; i < spliStr.length; i++) {
    const obj = {}
    obj.id = spliStr[i][0]
    obj.name = spliStr[i][1]
    obj.score = spliStr[i][2]
    result.push(obj)
  }
  return result
}

console.log(dataSiswa('001-Radith-88,002-Putra-100,003-Levy-83'))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa('001-Radith-5,002-Putra-92,003-Levy-100'))
/* 
[
  { id: '001', name: 'Radith', score: 5 },
  { id: '002', name: 'Putra', score: 92 },
  { id: '003', name: 'Levy', score: 100 }
]
 */

console.log(dataSiswa('001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90'))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 70 },
  { id: '003', name: 'Levy', score: 65 },
  { id: '004', name: 'Radinka', score: 88 },
  { id: '005', name: 'Bagas', score: 90 }
]
 */

console.log(dataSiswa('')) // tidak ada catatan hasil tes hari ini
