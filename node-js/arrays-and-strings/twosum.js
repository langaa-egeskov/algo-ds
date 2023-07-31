function twoSum (nums, target) {
  let i = 0
  
  while (i < nums.length) {
    for (let j = i+ 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
    i++
  }
}



export {twoSum}

const output = twoSum([15, 11, 2, 7, 24, 45], 9).sort((a,b)=> a-b)
console.log(output)
// consider [3, 2, 4]
// Given an array of integers nums and an integer target
// return indices of the two numbers such that they add
// up to target

// each input will have exactly one solution 
// you may not use the same element twice
// you can return in any order

