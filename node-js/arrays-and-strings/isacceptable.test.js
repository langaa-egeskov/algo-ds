import {isAcceptable} from './isacceptable.js'
import tap from 'tap'

tap.test('good input returns true', t => {
    t.plan(3)
    const output1 = 12.75001
    const output2 = 12.74999
    const output3 = 12.75
    t.same(isAcceptable(output1,12.75000, 1e-5), true, 'high bound')
    t.same(isAcceptable(output2,12.75000, 1e-5), true, 'low bound')
    t.same(isAcceptable(output3,12.75000, 1e-5), true, 'exact')
})

tap.test('bad input returns false', t => {
    t.plan(2)
    const output1 = 12.75002
    const output2 = 12.74998
    // const output3 = 12.75
    t.same(isAcceptable(output1,12.75000, 1e-5), false, 'high bound')
    t.same(isAcceptable(output2,12.75000, 1e-5), false, 'low bound')
    // t.same(isAcceptable(output3,12.75000, 1e-5), false, 'exact')
})