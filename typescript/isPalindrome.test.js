// can it take array or string
// can it handle a sparse array

import {isPalindrome} from './isPalindrome.js'
import tap from 'tap'

tap.test("test some string input", t => {
    t.plan(3)
    const string_01 = 'racecar'
    const string_02 = 'abbaabba'
    const string_03 = 'artbdtra'
    t.equal(isPalindrome(string_01), true, `isPalindrome(${string_01}) should return true `)
    t.equal(isPalindrome(string_02), true, `isPalindrome(${string_02}) should return true `)
    t.equal(isPalindrome(string_03), false, `isPalindrome(${string_03}) should return false `)
    
  })

  tap.test("test some array input", t => {
    t.plan(4)
    const arr_01 = [1,2,3,4,3,2,1]
    const arr_02 = [5, 6, 7, 7, 6, 5]
    const arr_03 = [8, 9, 3, 1, 2, 3, 9, 8]
    const arr_04 = [1, 2, 3, ,, 2, 1] //sparse array 
    t.equal(isPalindrome(arr_01), true, `isPalindrome(${arr_01}) should return true `)
    t.equal(isPalindrome(arr_02), true, `isPalindrome(${arr_02}) should return true `)
    t.equal(isPalindrome(arr_03), false, `isPalindrome(${arr_03}) should return false `)
    t.equal(isPalindrome(arr_04), false, `isPalindrome(${arr_04}) should return false `)
  })

  