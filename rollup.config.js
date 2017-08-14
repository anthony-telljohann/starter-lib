import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import prettier from 'rollup-plugin-prettier'

const entry = 'lib/starter-lib.js'
const external = Object.keys(pkg.dependencies)
const plugins = [babel(), prettier(pkg.prettier)]

let dest
let format

if (process.env.BABEL_ENV === 'cjs') {
  dest = pkg.main
  format = 'cjs'
}
if (process.env.BABEL_ENV === 'es') {
  dest = pkg.module
  format = 'es'
}

export default {
  format,
  entry,
  dest,
  external,
  plugins
}
