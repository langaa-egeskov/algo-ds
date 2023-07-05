import {isPair} from './sortedarrsum.js'
import tap from 'tap'

tap.test("example 1 ", t => {
  t.plan(1)
  const nums = [1, 2, 4, 6, 7, 9, 14, 15]
  const target = 13
  const output = isPair(nums, target)
  
  t.equal(output, true)
})

tap.test("example 2 ", t => {
  t.plan(1)
  const nums = [1, 2, 4, 6, 7, 9, 14, 15]
  const target = 83
  const output = isPair(nums, target)
  
  t.equal(output, false)
})