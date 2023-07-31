import tap from 'tap'
import {isSubsequence} from './issubsequence.js'

tap.test('example 0', t => {
  t.plan(1)
  const sub = 'ace'
  const string = 'abcde'
  t.equal(isSubsequence(sub, string), true)
})

tap.test('example 1', t => {
  t.plan(1)
  const sub = 'abc'
  const string = 'ahbgdc'
  t.equal(isSubsequence(sub, string), true)
})

tap.test('example 2', t => {
  t.plan(1)
  const sub = 'axc'
  const string = 'ahbghc'
  t.equal(isSubsequence(sub, string), false)
})

tap.test('example 23', t => {
  t.plan(1)
  const sub = 'aaaaaa'
  const string = 'bbaaaa'
  t.equal(isSubsequence(sub, string), false)
})
