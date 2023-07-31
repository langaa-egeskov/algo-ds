// given positive integer array nums and an integer k,
// return the # of subarrays such that the product 
// of the elements is <  k
// eg. nums = [10, 5, 2, 6], k = 100 => 8. 
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]


function findQuantSubarrays (nums, k) {
    let left = 0
    // curr will track the product of the elements
    let curr = 1
    // ans will be the number of valid subarrays per window
    // check each window for validity, if valid
    // the number of valid subarrays that window contains
    // is equal to the window size
    let ans = 0
    for (let right = 0 ; right < nums.length; ++right ) {
        // calculate the product
        curr *= nums[right]
        //console.log(`curr = ${curr}`)
        // assure window validity
        while (curr >= k) {
            curr /= nums[left]
            ++left
            // console.log(`left = ${left}, curr = ${curr}`)
        }
        // with a valid window subarrays = window length
        // all all the subarrays from that window to the ans
        
       
        // lets log the subarrays we are counting just for debugging
        // this for loop won't run if there isn't a window because 
        // left gets incremented in the while loop such that it is greater than right
         // console.log(`right=${right}, left=${left}, length =${right-left+1}, curr = ${curr}`)
        for (let i = left; i <=right; ++i) {
            // console.log(`nums.slice(${i}, ${right+1})`)
            console.log(`[${nums.slice(i, right+1)}]`)
        }
        ans += right - left + 1
    }

    return ans
}

export {findQuantSubarrays}

const nums = [200, 100, 245, 320]
const k = 100
console.log(`${findQuantSubarrays(nums, k)}`)

