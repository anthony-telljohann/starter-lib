import add from 'add'
import test from 'ava'

test('should return the summation of every addend', async t => {
  t.is(await add(1, 2, 3, 4), 10)
})
