/* eslint-disable no-undef */

const isObject = require('is-object')

module.exports = function (o) {
  if (!isObject(o)) {
    throw new TypeError(`Expected object but got ${typeof o}`)
  }

  Object.keys(o).forEach(key => localStorage.setItem(key, o[key]))
}
