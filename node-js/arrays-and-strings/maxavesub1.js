// only needed for inline testing
//import {isAcceptable} from './isacceptable.js'



function maxAve1(nums,k) {
    let left = 0
    let sum = 0
    let curr
   
    for (let right = 0; right < nums.length; ++right ) {
        console.log(`left = ${left}; right=${right}`)
        // lets build the sum as we build our window
        sum =  sum + nums[right]

        if (right - left === k-1) {
            
            // if curr exits, compare to average, otherwise initial curr with this average
            curr = curr ?  Math.max(curr, sum/k) : sum/k
            
            // do some logging
            // console.log(`**found valid subarray**`)
            // console.log(`array: [${nums.slice(left, right +1)}] ave: ${nums.slice(left, right +1).reduce((a, b) => 
            // (a+b))/k}`)

            // once we have a valid subarray we can increment left 
            sum = sum - nums[left]
            ++left
        }
        // if we didn't find a valid subarray need to continue loop
    }
    return curr

}



export {maxAve1}


// // inline testing
// console.log('example 1')
// const nums = [1, 12, -5, -6, 50, 3]
// const k = 4
// const error = 1e-5
// const expected = 12.75000
// const actual = maxAve1(nums, k)
// console.log(`Answer: ${actual} \nAnswer is acceptable: ${isAcceptable(actual, expected, error)}`)

// console.log('example 2')
// const nums = [5]
// const k = 4
// const error = 1e-5
// const expected = 5
// const actual = maxAve1(nums, k)
// console.log(`Answer: ${actual} \nAnswer is acceptable: ${isAcceptable(actual, expected, error)}`)

console.log('example 3')
const nums = [-1]
const k = 1
const error = 1e-5
const expected = -1
const actual = maxAve1(nums, k)
console.log(`Answer: ${actual} \nAnswer is acceptable: ${isAcceptable(actual, expected, error)}`)

// just checking the arithmetic logic
// const sum = nums => nums.reduce((a, b) => a + b)
// const ave = nums => sum(nums)/nums.length
// console.log(`sum = ${sum(nums)}`)
// console.log(`average = ${ave(nums)}`)


// logic
/*
need to move right over until k===4: right - left = 3
First: metric and constraint
1. constraint metric: length of sub array
2. numeric constraint: length must equal 4
Second: task
task is to find Max Average
*/


// passes my tests, but obviously doesnt scale for large arrays
// the problem was recalculating the average every time.

// function maxAve1(nums,k) {
//     let left = 0
//     let curr
   
//     for (let right = 0; right < nums.length; ++right ) {
//         console.log(`left = ${left}; right=${right}`)
//         if (right - left === k-1) {
//             let ave = nums.slice(left, right +1).reduce((a, b) => (a+b))/k
//             curr = curr ?  Math.max(curr, ave) : ave
            
//             // do some logging
//             console.log(`**found valid subarray**`)
//             console.log(`array: [${nums.slice(left, right +1)}] ave: ${nums.slice(left, right +1).reduce((a, b) => 
//             (a+b))/k}`)

//             // once we have a valid subarray we can increment left 
//             ++left
//         }
//         // if we didn't find a valid subarray need to continue loop
//     }
//     return curr

// }
