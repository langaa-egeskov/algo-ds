import { inMemReverseString as rev} from "./inmemreversestring.js";
import tap from 'tap'

tap.test('example 1', t => {
  t.plan(1)
  const input = ['h','e','l','l','o']
  const expected = ['o','l','l','e','h']
  t.strictSame(rev(input), expected)
})

tap.test('example 2', t => {
  t.plan(1)
  const input = ['H', 'a', 'n', 'n', 'a', 'h']
  const expected = ['h','a','n', 'n', 'a', 'H']
  t.strictSame(rev(input), expected)
})