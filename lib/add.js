import sum from './calculations/sum.js'
import transformArgumentsToAddends from './transforms/transform-arguments-to-addends.js'
import validateAddends from './validations/validate-addends.js'

async function add () {
  let addends = await transformArgumentsToAddends(arguments)
  validateAddends(addends)
  return sum(addends)
}

export default add
