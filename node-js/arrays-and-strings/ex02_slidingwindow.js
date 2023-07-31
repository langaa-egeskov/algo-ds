// given a binary string s 
// choose up to one "0" and flip it to a "1" = at most 1 0
// return the length of the longest substring achievable that contains only "1"?
// eg: given s = "1101100111", the answer is 5

function findLength(s) {
    // test for validity is number of zeros (must be < = 1)
    // curr will be number of zeros
    let curr = 0
    // ans will be compare to the length of the current window
    let ans = 0
    let left = 0
    for (let right = 0; right < s.length -1; ++right) {
        // check if right = 0 and if so increment current
        if (s[right] === '0') {
            ++curr
        }
        // check if current < =1 , otherwise remove from left
        while (curr > 1) {
            // check if left most value is a zero
            // if it is subtract from the zero count
            if (s[left] === '0') {
                --curr
            }
            // in any case increment left
            ++left
        }

        // compare current window length to previous
        // and select max
        ans = Math.max(ans, right - left + 1)
    }

    return ans

}

export {findLength}

