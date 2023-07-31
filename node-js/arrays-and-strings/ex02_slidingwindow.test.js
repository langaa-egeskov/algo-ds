import {findLength} from './ex02_slidingwindow.js'
import tap from 'tap'
// eg: given s = "1101100111", the answer is 5

tap.test('given', t => {
    t.plan(1)
    const s = "1101100111"
    t.same(findLength(s), 5)
})