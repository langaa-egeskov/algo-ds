import {twoSum} from './twosum.js'
import tap from 'tap'

tap.test("example 1 ", t => {
  t.plan(1)
  const output = twoSum([2, 7, 11, 15], 9).sort((a,b)=> a-b)
  t.strictSame(output, [0,1])
})

tap.test("example 2", t => {
  t.plan(1)
  const output = twoSum([3, 2, 4], 6).sort((a,b)=> a-b)
  t.strictSame(output, [1,2])
})

tap.test("example 3", t => {
  t.plan(1)
  const output = twoSum([3,3], 6).sort((a,b)=> a-b)
  t.strictSame(output, [0, 1])
})