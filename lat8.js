/*
=======================
INVENTARIS KERAN MASJID
=======================
[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu
[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'
input : 'XX?XX?XX'
output :
'Semua keran rusak'
[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr
// YOUR PSEUDOCODE/ALGORITHM HERE
*/

function inventarisKeran(str) {
  const jalan = []
  const rusak = []
  const strSort = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== 'X') {
      strSort.push(str[i])
    }
  }

  for (let i = 0; i < strSort.length; i++) {
    if (strSort[i] == '^') {
      jalan.push(i + 1)
    } else if (strSort[i] == '?') {
      rusak.push(i + 1)
    }
  }

  if (jalan.length && rusak.length) {
    return `terdapat ${jalan.length} keran yang berjalan nomor(${jalan.join(', ')}), dan ${
      rusak.length
    } keran rusak nomor(${rusak.join(', ')})`
  } else if (jalan.length && !rusak.length) {
    return 'Semua keran berjalan dengan baik'
  } else if (!jalan.length && rusak.length) {
    return 'Semua keran rusak'
  }
}

console.log(inventarisKeran('XX^XX^XX^XX?XX^XX'))
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran('XX?XX?XX^XX'))
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran('XX^XX^XX'))
// Semua keran berjalan dengan baik
console.log(inventarisKeran('XX?XX?XX'))
// Semua keran rusak
