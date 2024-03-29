/*
=================
AGE VERIFICATION
=================
[INSTRUCTION]
Terdapat function ageVerification , function akan mengembalikan list
orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
- jika gender male diberikan imbuhan Mr.
- jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
- jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.
[EXAMPLE]
input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']
[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/

function ageVerification(list) {
  const result = []

  for (let i = 0; i < list.length; i++) {
    const a = list[i].split(',')
    if (a[1] == 'male') {
      result.push(`Mr. ${a[0]}`)
    } else if (a[1] == 'female' && a[2] >= 30) {
      result.push(`Mrs. ${a[0]}`)
    } else {
      result.push(`Ms. ${a[0]}`)
    }
  }
  console.log(result)
}

var people = [
  'Miftah,male,21',
  'Dhimas,male,25',
  'Budi,male,13',
  'Toni,male,22',
  'Nita,female,77',
  'Nana,female,21',
  'Nani,female,19'
]

console.log(ageVerification(people))
// ['Mr. Miftah', 'Mr. Dhimas', 'Mr.Toni', 'Mrs. Nita', 'Ms.Nana']

var people2 = ['Arya,female,22', 'Greyjoy,male,100', 'littlefinger,male,45', 'Bran,male,15']
console.log(ageVerification(people2))
// ['Ms. Arya', 'Mr. Greyjoy', 'Mr. littlefinger']
