//  given integer array nums and integer k
// find length of longest subarray whose
// sum is less than or equal to k

function findLength(nums, k) {
    let left = 0
    // constraint is sum of elements represented by curr
    let curr = 0
    // we will keep picking the max sum and assign it to ans
    let ans = 0

    for (let right = 0; right < nums.length - 1; ++right) {
        // calculate the sum of the elements
        curr += nums[right]
        // check if this is a valid subarray (sum <=k)
        while (curr > k) {
            // increment the left and subtract that element out
            ++left
            curr-=nums[left]

        }

    // compare the current window to ans 
    // then let ans be set to whichever is largest
    ans = Math.max(ans, right - left + 1)

    }
    return ans
}

export {findLength}