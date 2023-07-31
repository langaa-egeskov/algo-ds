function inMemReverseString(charArray) {
  
  for (let i = 0; i < charArray.length / 2; i++) {
    let temp = charArray[i]
    charArray[i] = charArray[charArray.length - 1 - i]
    charArray[charArray.length - 1 - i] = temp
  }
  return charArray
}

export {inMemReverseString}