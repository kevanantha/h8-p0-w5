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
function splitStr(str, operator = '') {
  if (Array.isArray(str)) return
  const result = []
  let temp = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] == operator) {
      result.push(temp)
      temp = ''
    } else {
      temp += str[i]
    }
    if (i == str.length - 1) result.push(temp)
  }
  return result
}

function dataSiswa(scoreRecord) {
  if (!scoreRecord) return 'tidak ada catatan hasil test hari ini'

  const splitStrComma = splitStr(scoreRecord, ',')
  const multiDArray = []
  const result = []

  for (let i = 0; i < splitStrComma.length; i++) {
    const splitDash = splitStr(splitStrComma[i], '-')
    multiDArray.push(splitDash)
  }

  for (let i = 0; i < multiDArray.length; i++) {
    const obj = {}
    obj.id = multiDArray[i][0]
    obj.name = multiDArray[i][1]
    obj.score = multiDArray[i][2]
    result.push(obj)
  }

  return result
}

module.exports = splitStr

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
