function isSubsequence(s, t) {
  const sLength = s.length
  const tLength = t.length
  let i = 0, j = 0

  while(i < sLength && j < tLength){

    if(s[i] === t[j]) {
      ++i
    }
    ++j
  }
  // if you made it through s you have found all the letters in t
  // if not you did not
  return i === sLength

}

export{isSubsequence}



// minitest
const sub = 'aaaaaa'
const string = 'bbaaaa'
console.log(`isSubsequence(sub, string) = ${isSubsequence(sub, string)}`)

// function isSubsequence(s, t) {
//   const sLength = s.length
//   const tLength = t.length
//   let i = 0
//   let j = 0

//   outerloop:
//   while(i < sLength){

//     while(j < tLength) {
//       console.log(`(s[${i}] = ${s[i]}; t[${j}] = ${t[j]}`)
//       if (s[i] === t[j]) {
//         ++i
//         ++j
//         continue outerloop
//       }
//       ++j
//     }
//     return false
//   }
//   return true

// }

// export{isSubsequence}