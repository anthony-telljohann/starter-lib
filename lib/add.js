import is from 'is'
import sum from './methods/sum.js'

async function add() {
  let addends = await Promise.all(Array.from(arguments))
  if (!addends.every(is.number)) {
    throw new TypeError()
  }
  return sum(addends)
}

export default add
