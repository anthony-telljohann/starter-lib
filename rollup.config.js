import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import prettier from 'rollup-plugin-prettier'

let dest

if (process.env.BABEL_ENV === 'es') {
  dest = pkg.module
} else {
  dest = pkg.main
}

export default {
  format: process.env.BABEL_ENV,
  entry: `lib/${pkg.name}.js`,
  dest: dest,
  external: Object.keys(pkg.dependencies),
  plugins: [babel(), prettier(pkg.prettier)]
}
