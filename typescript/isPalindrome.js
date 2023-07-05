function isPalindrome(arr_or_str) {
    let i = 0;
    let j = arr_or_str.length - 1;
    while (i <= j) {
        if (arr_or_str[i] !== arr_or_str[j]) {
            // console.log(`${arr_or_str} is not a Palindrome`)
            return false;
        }
        ++i;
        --j;
    }
    //  console.log(`${arr_or_str} is a Palindrome`)
    return true;
}
export { isPalindrome };
