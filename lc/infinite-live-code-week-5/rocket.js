/*
============
rankingAsrama
============

rankingAsrama adalah sebuah fungsi yang menerima parameter berupa array of object dengan format:

[
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  ...
]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan mengeluarkan output informasi asrama dengan peringkat pertama berdasarkan nilai rata-rata penghuninya.


[EXAMPLE]

* INPUT *
[
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

* PROCESS *
Setelah menghitung rata-rata dari setiap asrama diperoleh data
- Griffindo memperoleh rata-rata 47
- Ravenclaw memperoleh rata-rata 35
- Slyterin memperoleh rata-rata 57
Jadi asrama dengan rata-rata tertinggi adalah Slyterin

* OUTPUT *
Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57


[NOTES]
  - angka rata-rata dibulatkan keatas.
  - Diasumsikan tidak ada asrama dengan rata-rata nilai yang sama.

*/

function rankingAsrama(students) {
  let perAsrama = {}

  for (let i = 0; i < students.length; i++) {
    if (!perAsrama[students[i].asrama]) {
      perAsrama[students[i].asrama] = {
        asrama: students[i].asrama,
        students: [],
        rataRata: []
      }
    }
    perAsrama[students[i].asrama].students.push(students[i].nama)
    perAsrama[students[i].asrama].rataRata.push(students[i].nilai)
  }

  const values = Object.values(perAsrama)

  for (let i = 0; i < values.length; i++) {
    let rata = 0
    for (let j = 0; j < values[i].rataRata.length; j++) {
      rata += values[i].rataRata[j]
    }
    const rata2 = Math.round(rata / values[i].rataRata.length)
    values[i].rataRata = rata2
  }

  for (let i = 0; i < values.length - 1; i) {
    if (values[i + 1].rataRata > values[i].rataRata) {
      const temp = values[i + 1]
      values[i + 1] = values[i]
      values[i] = temp
      i = Math.max(0, i - 1)
    } else i++
  }

  return values
}

var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' }
]

console.log(rankingAsrama(data)) // Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57
