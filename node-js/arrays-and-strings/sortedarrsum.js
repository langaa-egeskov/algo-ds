function isPair (sorted, target) {
  let left = 0
  let right = sorted.length - 1

  while (left < right) {
    const sum = sorted[left] + sorted[right]
    // console.log(`sum = left + right ::${sum} = ${sorted[left]} + ${sorted[right]}`)
    if (sum === target) {
      return true
    }

    if (sum > target) {
      --right
    }

    if (sum < target) {
      ++left
    }
  }
  return false
  
  
}

export {isPair}

// // minitest 1
// const nums = [1, 2, 4, 6, 7, 9, 14, 15]
// const target = 83
// const output = isPair(nums, target)
// console.log(`mini test 1 output=${output}`)

// // minitest 2
// const nums2 = [3, 6, 21, 23, 25]
// const target2 = 27
// const output2 = isPair(nums2, target2)
// console.log(`mini test 1 output=${output2}`)