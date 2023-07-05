import {combArray} from './combarray.js'
import tap from 'tap'

tap.test("test 01", t => {
  t.plan(1)
  const arr1 = [1, 4, 7, 20]
  const arr2 = [3, 5, 6]
  const output = combArray(arr1, arr2)
  t.strictSame(output, [1,3,4,5,6,7,20])
})

tap.test("test 02", t => {
  t.plan(1)
  const arr1 = [34, 56, 8 , 200, 7, 20].sort((a, b) => a - b)
  const arr2 = [3, 92, 6, 4, 4, 3].sort((a, b) => a - b)
  const output = combArray(arr1, arr2)
  t.strictSame(output, [3, 3, 4, 4, 6, 7, 8, 20, 34, 56, 92, 200])
})