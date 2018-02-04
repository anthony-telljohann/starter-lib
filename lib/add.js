import sum from './calculations/sum.js'
import validateAddends from './validations/validate-addends.js'

async function add(...addends) {
  validateAddends(addends)
  return sum(addends)
}

export default add
