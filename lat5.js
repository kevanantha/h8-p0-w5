/*===============
Shortest Word
===============
[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex
[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']
input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/

function splitStr(str, operator) {
  const result = []
  let temp = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] == operator) {
      result.push(temp)
      temp = ''
    } else {
      temp += str[i].toLowerCase()
    }
    if (i == str.length - 1) result.push(temp)
  }
  return result
}

function smallestNum(arr) {
  let smallestNum = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) smallestNum = arr[i]
  }

  return smallestNum
}

function filter(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) delete arr[j]
    }
    if (arr[i]) result.push(arr[i])
  }

  return result
}

function shortestWords(words) {
  const splitWords = splitStr(words, ' ')
  const arr = []
  const result = []

  for (let i = 0; i < splitWords.length; i++) {
    arr.push(splitWords[i].length)
  }

  const smallNum = smallestNum(arr)

  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length == smallNum) {
      result.push(splitWords[i])
    }
  }
  return filter(result)
}

console.log(shortestWords('Do you want to become a great coder ?')) // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')) // ['you', 'it!'] \\ kalo keluarnya ["You"] boleh ga?
console.log(shortestWords('I am diligent')) // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')) // ['kita', 'saja']
