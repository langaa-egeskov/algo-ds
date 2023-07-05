// example 3 in Arrays and strings

function combArray (arr1, arr2) {
  const newArrayLength = arr1.length + arr2.length
  const newArray = new Array (newArrayLength)
  let i = 0
  let j = 0
  let index = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArray[index++] = arr1[i++]
      continue
    }

    newArray[index++] = arr2[j++]

  }

  // make sure to exhaust each array
  while (i < arr1.length) {
    newArray[index++] = arr1[i++]
  }

  while (j < arr2.length) {
    newArray[index++] = arr2[j++]
  }

  return newArray
}

export {combArray}

// mini test
// const arr1 = [1, 4, 7, 20]
// const arr2 = [3, 5, 6]
// const output = combArray(arr1, arr2)
// console.log(output)
// //expect [1,3,4,5,6,7,20]

// const arr1 = [34, 56, 8 , 200, 7, 20].sort((a, b) => a - b)
// const arr2 = [3, 92, 6, 4, 4, 3].sort((a, b) => a - b)
// console.log(`arr1 = [${arr1}]`)
// console.log(`arr2 = [${arr2}]`)
// const output = combArray(arr1, arr2)
// console.log(output)