import is from 'is'

const addition = (x, y) => x + y
const summation = summands => summands.reduce(addition, 0)

async function add() {
  let addends = await Promise.all(Array.from(arguments))
  if (!addends.every(is.number)) {
    throw new TypeError()
  }
  return summation(addends)
}

export default add
