// can it take array or string
// can it handle a sparse array

import {isPalindrome} from './isPalindrome.js'
import assert from 'node:assert/strict'

function test_string () {
  const string_01 = 'racecar'
  const string_02 = 'abbaabba'
  const string_03 = 'artbdtra'
  assert.strictEqual(isPalindrome(string_01), true, `isPalindrome(${string_01}) should return true `)
  assert.strictEqual(isPalindrome(string_02), true, `isPalindrome(${string_02}) should return true `)
  assert.strictEqual(isPalindrome(string_03), false, `isPalindrome(${string_03}) should return false `)
}

function test_array () {
  const arr_01 = [1,2,3,4,3,2,1]
  const arr_02 = [5, 6, 7, 7, 6, 5]
  const arr_03 = [8, 9, 3, 1, 2, 3, 9, 8]
  const arr_04 = [1, 2, 3, ,, 2, 1] //sparse array ?
  assert.strictEqual(isPalindrome(arr_01), true, `isPalindrome(${arr_01}) should return true `)
  assert.strictEqual(isPalindrome(arr_02), true, `isPalindrome(${arr_02}) should return true `)
  assert.strictEqual(isPalindrome(arr_03), false, `isPalindrome(${arr_03}) should return false `)
  assert.strictEqual(isPalindrome(arr_04), false, `isPalindrome(${arr_04}) should return false `)
}

console.log('Running string tests...')
try {
  test_string()
} catch (e) {
  console.log(`Error(s) occured in testing strings: \n${e}\n`)
}
console.log('Running array tests...')
try {
  test_array() 
} catch (e) {
  console.log(`Error(s) occurred in testing arrays\n${e}\n`)
}
