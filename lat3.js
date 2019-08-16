/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
 ['andre', 'toni', 'toti'],
 ['risk', 'fun', 'go'],
 ['humble', 'psycho', 'strong']
]
PROCESS:
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.
OUTPUT: pemenangnya adalah toni
[NOTES]
 1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
 2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya
[RULES]
 1. Dilarang menggunakan built in function .sort()
*/
function warOfFun(informations) {
  if (!informations.length) return 'mohon maaf tidak ada pemenangnya'
  const arrObj = []

  for (let i = 0; i < informations.length; i++) {
    const player = {
      name: '',
      fun: 0
    }

    for (let j = 0; j < informations.length; j++) {
      if (j === 0) player.name = informations[j][i]
      if (informations[j][i] === 'fun') player.fun = player.fun + 1 || 1
    }
    arrObj.push(player)
  }

  let winner = arrObj[0]

  for (let i = 0; i < arrObj.length; i++) {
    const { fun } = arrObj[i]
    if (fun > winner.fun) winner = arrObj[i]
  }

  if (winner.fun) return `pemenangnya adalah ${winner.name}`

  return 'mohon maaf tidak ada pemenangnya'
}
console.log(
  warOfFun([['andre', 'toni', 'toti'], ['risk', 'fun', 'go'], ['humble', 'psyhco', 'strong']])
)
// pemenangnya adalah toni
console.log(
  warOfFun([
    ['andre', 'toni', 'toti', 'tito'],
    ['fun', 'fun', 'fun'],
    ['fun', 'fun'],
    ['nonfun', 'fun', 'fun', 'fun']
  ])
)
// pemenangnya adalah toni
console.log(warOfFun([['andre', 'toni'], ['risk', 'go'], ['humble', 'strong']]))
// mohon maaf tidak ada pemenangnya
console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya
