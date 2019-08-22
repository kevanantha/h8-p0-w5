/* 1)
input: 4 (minimum 4, maksimal 9)
 *******
  *   *
   * *
    *
input: 6
***********
 *       *
  *     *
   *   *
    * *
     * 
*/

function star(n) {
  const limit = n * 2 - 1
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < limit; j++) {
      if (i == 0) {
        temp += '*'
      } else if (i == j || j == limit - 1 - i) {
        temp += '*'
      } else {
        temp += ' '
      }
    }
    console.log(temp)
  }
}
star(4)
star(6)
star(30)

/* 2) 
input: [ 2, 7, 2, 7, 7, 2, 5 ] 
output: 3 */
function smallestNumFunc(arr) {
  let smallestNum = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) smallestNum = arr[i]
  }

  return smallestNum
}

function sorting(arr) {
  for (let i = 0; i < arr.length - 1; i) {
    if (arr[i + 1] > arr[i]) {
      const temp = arr[i + 1]
      arr[i + 1] = arr[i]
      arr[i] = temp
      i = Math.max(0, i - 1)
    } else i++
  }
  return arr
}

function two(arr) {
  const smallestNum = smallestNumFunc(arr)

  const countSmall = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == smallestNum) countSmall.push(arr[i])
  }
  if (countSmall.length == 1 || !arr.length) return 0

  result = []
  let temp = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== smallestNum) {
      temp++
    } else {
      result.push(temp + 1)
      temp = 0
    }
    result.push(temp)
  }

  const output = sorting(result)
  return output[0]
}

console.log(two([2, 7, 2, 7, 7, 2, 5]))

// 3)
function cariPelaku(str) {
  if (!str.length) return 0

  if (str[0] == 'a' && str[1] == 'b' && str[2] == 'c') {
    return 1 + cariPelaku(str.slice(1))
  } else {
    return cariPelaku(str.slice(1))
  }
}
// TEST CASES
console.log(cariPelaku('mabcvabc')) // 2
console.log(cariPelaku('abcdabdc')) // 1
console.log(cariPelaku('bcabcac')) // 1
console.log(cariPelaku('abcabcabc')) // 3
console.log(cariPelaku('babcbacabc')) // 2
