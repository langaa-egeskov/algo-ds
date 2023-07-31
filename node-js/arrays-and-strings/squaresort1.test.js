import {squareSort1, squareSort2} from './squaresort1.js'
import tap from 'tap'

tap.test('example 1', t => {
  t.plan(2)
  const input = [-4, -1, 0, 3, 10]
  const expected = [0, 1, 9, 16, 100]
  t.strictSame(squareSort1(input), expected)
  t.strictSame(squareSort2(input), expected)
})

tap.test('example 2', t => {
  t.plan(2)
  const input = [-7, -3, 2, 3, 11]
  const expected = [4, 9, 9, 49, 121]
  t.strictSame(squareSort1(input), expected)
  t.strictSame(squareSort2(input), expected)
})