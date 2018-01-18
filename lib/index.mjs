/**
 * Convert nested object to flatten or expand.
 * @module objnest
 * @version 4.0.2
 */

'use strict'

import create from './create'
import Objnest from './objnest'

const lib = create()

Object.assign(lib, create, {
  create,
  Objnest
})

export default lib
const {expand, flatten} = lib

export {
  create,
  expand,
  flatten,
}