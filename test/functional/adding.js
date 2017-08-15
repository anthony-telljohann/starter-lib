import add from 'add'
import test from 'ava'

test('should return the summation of every addend', async t => {
  t.is(await add(1), 1)
  t.is(await add(1, 2), 1 + 2)
  t.is(await add(1, 2, 3), 1 + 2 + 3)
  t.is(await add(1, 2, 3, 4), 1 + 2 + 3 + 4)
  t.is(await add(1, 2, 3, 4, 5), 1 + 2 + 3 + 4 + 5)
  t.is(await add(1, 2, 3, 4, 5, 6), 1 + 2 + 3 + 4 + 5 + 6)
})
