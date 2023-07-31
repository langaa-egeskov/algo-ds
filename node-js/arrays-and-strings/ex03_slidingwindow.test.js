import { findQuantSubarrays } from "./ex03_slidingwindow.js"
import tap from 'tap'

// given the input nums = [10, 5, 2, 6], k = 100, the answer is 8.
// try nums = [10, 5, 2, 6, ]

tap.test("given", t => {
    t.plan(1)
    const nums = [10, 5, 2, 6]
    const k = 100
    t.same(findQuantSubarrays(nums, k), 8)
})

tap.test("longer", t => {
    t.plan(1)
    const nums = [10, 5, 2, 6, 4]
    const k = 100
    t.same(findQuantSubarrays(nums, k), 11)
})

tap.test("even longer", t => {
    t.plan(1)
    const nums = [10, 5, 2, 6, 4, 100, 5, 3]
    const k = 100
    t.same(findQuantSubarrays(nums, k), 14)
})

tap.test("no valid window", t => {
    t.plan(1)
    const nums = [200, 100, 245, 320]
    const k = 100
    t.same(findQuantSubarrays(nums, k), 0)
})