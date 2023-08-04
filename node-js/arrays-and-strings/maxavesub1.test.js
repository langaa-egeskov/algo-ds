import {maxAve1} from './maxavesub1.js'
import tap from 'tap'
import {isAcceptable} from './isacceptable.js'

const error = 1e-5

tap.test('example 1', t => {
    t.plan(1)
    const nums = [1, 12, -5, -6, 50, 3]
    const k = 4
    const expected = 12.75000
    const actual = maxAve1(nums, k)
    t.same(isAcceptable(actual, expected, error), true)
})

tap.test('example 2', t => {
    t.plan(1)
    const nums = [5]
    const k = 1
    const expected = 5.00000
    const actual = maxAve1(nums, k)
    t.same(isAcceptable(actual, expected, error), true)
})

tap.test('example 3', t => {
    t.plan(1)
    const nums = [-1]
    const k = 1
    const expected = -1
    const actual = maxAve1(nums, k)
    t.same(isAcceptable(actual, expected, error), true)
})


