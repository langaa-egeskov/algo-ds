import {findLength} from './ex01_slidingwindow.js'
import tap from 'tap'

tap.test('given', t => {
    t.plan(1)
    const nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]
    const k = 8
    t.equal(findLength(nums, k), 4)
})