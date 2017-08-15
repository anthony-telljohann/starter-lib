import is from 'is'

export default function(addends) {
  if (!addends.every(is.number)) {
    throw new TypeError()
  }
}
