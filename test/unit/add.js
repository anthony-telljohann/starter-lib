import add from 'add'
import is from 'is'
import test from 'ava'

test('is a function', async t => {
  t.true(is.fn(add))
})

test('returns a Promise', async t => {
  t.true(is.instance(add(), Promise))
})

test('resolves a Number', async t => {
  t.true(is.number(await add(1, 1)))
})

test('throws TypeError', async t => {
  await t.throws(add(1, {}))
  await t.throws(add({}, 1))
  await t.throws(add({}, {}))
})
